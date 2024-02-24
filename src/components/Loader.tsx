

const Loader = () => {
  
  return (
    <div className="grid place-items-center h-screen">
      <div className="flex justify-center item-center">
        <span className="circle animate-loader" />
        <span className="circle animate-loader animation-delay-200" />
        <span className="circle animate-loader animation-delay-400" />
      </div>
    </div>
  );
};


export { Loader };