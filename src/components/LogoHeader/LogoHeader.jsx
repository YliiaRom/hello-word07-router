function LogoHeader({ logoContent, logoTitle }) {
  return (
    <>
      <div className="flex items-center">
        <div className="h-10 w-10  rounded-xl bg-gradient-to-r from-gray-500 to-gray-100 flex items-center justify-center text-purple-600 font-bold text-xl mr-3">
          {logoContent}
        </div>
        <span className="text-xl font-bold bg-gradient-to-r from-gray-300 to-gray-100 bg-clip-text text-transparent">
          {logoTitle}
        </span>
      </div>
    </>
  );
}
export default LogoHeader;
