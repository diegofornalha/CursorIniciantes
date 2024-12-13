interface ButtonProps {
  label: string;
  onClick: () => void;
  platform?: 'web' | 'mobile' | 'desktop';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, platform = 'web' }) => {
  const styles = {
    web: "bg-blue-500 text-white p-2 rounded",
    mobile: "bg-blue-500 text-white p-4 rounded-lg w-full",
    desktop: "bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
  };

  return (
    <button 
      onClick={onClick} 
      className={styles[platform]}
    >
      {label}
    </button>
  );
};

export default Button; 