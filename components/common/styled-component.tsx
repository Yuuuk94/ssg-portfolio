type Props = {
  children: React.ReactNode;
};

export const NeoContent = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-2xl px-28 py-12 mb-12 relative">
      {children}
      <div className="rounded-2xl shadow-custom-neo-b absolute inset-0 -z-40"></div>
      <div className="rounded-2xl shadow-custom-neo-t absolute inset-0 -z-40"></div>
    </div>
  );
};

export const NeoWorkContent = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-2xl w-[32%] px-28 py-12 mb-12 relative">
      {children}
      <div className="rounded-2xl shadow-custom-neo-b absolute inset-0 -z-40"></div>
      <div className="rounded-2xl shadow-custom-neo-t absolute inset-0 -z-40"></div>
    </div>
  );
};

export const NeoIcon = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-full p-2 mb-4 relative cursor-pointer">
      {children}
      <div className="rounded-full shadow-neo-icon-b absolute inset-0 -z-10"></div>
      <div className="rounded-full shadow-neo-icon-t absolute inset-0 -z-10"></div>
    </div>
  );
};

export const NeoBtn = ({ children }: Props) => {
  return (
    <div className="bg-bgGray rounded-2xl p-4 mx-auto mb-12 w-1/6 relative cursor-pointer">
      {children}
      <div className="rounded-2xl shadow-custom-neo-b absolute inset-0 -z-40"></div>
      <div className="rounded-2xl shadow-custom-neo-t absolute inset-0 -z-40"></div>
    </div>
  );
};
