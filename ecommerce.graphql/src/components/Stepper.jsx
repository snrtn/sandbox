import PropTypes from "prop-types";
import {
  FaCheckCircle,
  FaBoxOpen,
  FaLanguage,
  FaPalette,
  FaBrush,
  FaRulerCombined,
  FaDollarSign,
} from "react-icons/fa";

const Stepper = ({ steps, activeStep, onStepClick, stepsCompleted }) => {
  const icons = [
    FaBoxOpen,
    FaLanguage,
    FaPalette,
    FaBrush,
    FaRulerCombined,
    FaDollarSign,
  ];

  return (
    <div className="w-full flex justify-between bg-white fixed top-0 left-0 right-0 px-6 py-4 shadow-md z-10">
      {steps.map((step, index) => {
        const StepIcon = icons[index];
        const isDisabled = !stepsCompleted[index] && index > activeStep;

        return (
          <div
            key={index}
            className={`flex-1 text-center relative group ${
              isDisabled ? "cursor-not-allowed opacity-50" : "cursor-pointer"
            }`}
            onClick={() => !isDisabled && onStepClick(index)}
          >
            <div
              className={`inline-flex items-center justify-center ${
                index === activeStep
                  ? "text-blue-600"
                  : index < activeStep
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
              title={step.label}
            >
              {index < activeStep ? (
                <FaCheckCircle className="w-6 h-6" />
              ) : (
                <StepIcon className="w-6 h-6" />
              )}
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity bg-gray-800 text-white text-sm rounded py-1 px-2">
              {step.label}
            </div>
          </div>
        );
      })}
    </div>
  );
};

Stepper.propTypes = {
  steps: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  activeStep: PropTypes.number.isRequired,
  onStepClick: PropTypes.func.isRequired,
  stepsCompleted: PropTypes.arrayOf(PropTypes.bool).isRequired, // Ensure the prop type is correct
};

export default Stepper;
