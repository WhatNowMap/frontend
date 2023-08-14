const UserProfileAndSetting = () => {
  const content = (
    <div className="flex">
      <img
        src="https://www.cnet.com/a/img/resize/d30d7c3bca5bd9999e074ff073d0a986b7b405bd/hub/2023/07/18/adec38b2-8321-43be-a643-17f4a633cf01/john-wick-4-2.jpg?auto=webp&fit=crop&height=1200&width=1200"
        className="w-16 rounded-full"
      />
      <div className="text-white">Name</div>
    </div>
  );

  return (
    <>
      <div className="w-full box-border flex flex-row px-4 py-2 bg-secondary-700 ">
        {content}
      </div>
    </>
  );
};

export default UserProfileAndSetting;
