import SearchBar from "../../components/searchBar";
import TabBar from "../../components/tabBar";
import UserProfileAndSetting from "../../components/user-profile-and-setting/userProfileAndSetting";

function UserProfile() {
  return (
    <>
      <div className="flex flex-col h-screen max-h-screen">
        <SearchBar />
        <div className="overflow-y-scroll">
          <UserProfileAndSetting />
        </div>
        <TabBar highlight="profile" />
      </div>
    </>
  );
}

export default UserProfile;
