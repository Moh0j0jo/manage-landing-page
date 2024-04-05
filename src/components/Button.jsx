const Button = ({label, styles=''}) => {
  
  const defaultClasses = 'flex items-center justify-center rounded-3xl font-semibold py-6'

  const buttonClasses = `${defaultClasses} ${styles}`;
  
  return (
    <button className= {buttonClasses}>
      {label}
    </button>
  );
};

export default Button;
