import axios from "axios";
import { useEffect, useState } from "react";

type User = {
  email: string,
  userName: string,
  tag: string[],
  fixedLocation: string
}

const UserProfileAndSetting: React.FC = () => {
  const [user, setUser] = useState<User>(); //get input value
  const [showInput, setShowInput] = useState<boolean>(false); //edit name
  const baseUrl = import.meta.env.VITE_REACT_APP_BASEURL

  const getNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    if(user){
      const updatedUser = {...user, userName:e.target.value }
      setUser(updatedUser)
    }
  };

  const cancleHandler = () => {
    setShowInput(false);
  };

  const editHandler = () => {
    setShowInput(true);
  };

  const fetchUserNameHandler = async (): Promise<void> => {
    try {
      await axios.get(`${baseUrl}user/profile`, {withCredentials: true})
        .then(response=>{
          const user = response.data
          if(user){
            setUser(user);
          }else{
            throw Error('User Not Found!')
          }
        }).catch(err=>{
          console.log('fetchUserNameHandler::error', err)
        })
    } catch (err) {
      console.log(err);
    }
  };

  useEffect((): void => {
    fetchUserNameHandler();
  }, []);

  const updateUserName = async () => {
    try {
      axios.post(`${baseUrl}user/update`, {...user}, {withCredentials: true})
        .then(response=>{
            console.log('updateUserName', response)
        }).catch(err=>{
          console.log(err)
        })
      setShowInput(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="w-full box-border px-4 py-2 bg-secondary-700 ">
      <div className="w-full decoration-white text-white mt-10">
        <div className="flex items-center ">
          <img
            src="https://www.cnet.com/a/img/resize/d30d7c3bca5bd9999e074ff073d0a986b7b405bd/hub/2023/07/18/adec38b2-8321-43be-a643-17f4a633cf01/john-wick-4-2.jpg?auto=webp&fit=crop&height=1200&width=1200"
            className="w-16 rounded-full "
          />
          {showInput ? ( //Show input edit when click "Edit"
            <div className=" w-3/4 pl-2 pb-2 ml-3">
              <input
                type="text"
                onChange={getNameHandler}
                className="bg-secondary-800 px-2 py-1 w-full focus:outline-none"
                defaultValue={user && user.userName}
              />
            </div>
          ) : (
            <div className=" w-3/4 pl-2 pb-2 border-b ml-3">{user && user.userName}</div>
          )}
        </div>

        <div className="flex justify-between">
          <button className=" pl-4 mt-2 cursor-pointer" onClick={editHandler}>
            Edit
          </button>
          {showInput ? ( //Show submit button when click "Edit"
            <div>
              <button
                className=" bg-secondary-400 py-1 px-3 rounded-md"
                onClick={cancleHandler}
              >
                Cancle
              </button>
              <button
                className=" ml-2 bg-primary-600  py-1 px-3 rounded-md"
                onClick={updateUserName}
              >
                Change
              </button>
            </div>
          ) : null}
        </div>

        <div className="mt-7 mb-2">Email ID</div>
        <div className="bg-secondary-800 px-3 py-2 rounded-md mb-6">
          {user && user.email}
        </div>
        <div className="flex cursor-pointer justify-center  py-2 bg-primary-400 rounded-sm mb-4">
          <div>Event History</div>
        </div>
        <div className="flex cursor-pointer justify-center py-2 bg-primary-400 rounded-sm">
          <div>Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default UserProfileAndSetting;
