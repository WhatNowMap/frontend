import TabBar from "../../components/tabBar";
import UserProfileAndSetting from "../../components/user-profile-and-setting/userProfileAndSetting";

function UserProfile() {
  return (
    <>
      <div className="flex flex-col h-[100dvh] max-h-[100dvh]">
        <div className="overflow-y-scroll">
          <UserProfileAndSetting />
        </div>
        <TabBar highlight="profile" />
      </div>
    </>
  );
}

export default UserProfile;
