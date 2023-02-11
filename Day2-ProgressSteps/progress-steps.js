const createProgressSteps = ({
  containerId,
  previousButtonId,
  nextButtonId,
}) => {
  const steps = [];
  let currentStep = 0;

  const container = document.getElementById(containerId);

  const previousButton = document.getElementById(previousButtonId);
  const nextButton = document.getElementById(nextButtonId);

  const addStep = () => {
    let stepLine = null;
    let stepLineHighlight = null;

    if (steps.length) {
      stepLine = document.createElement("div");
      stepLine.classList.add("stepLine");
      container.appendChild(stepLine);

      stepLineHighlight = document.createElement("div");
      stepLineHighlight.classList.add("stepLineHighlight");
      stepLine.appendChild(stepLineHighlight);
    }
    const stepDot = document.createElement("span");
    stepDot.innerHTML = steps.length + 1;
    stepDot.classList.add("stepDot");
    container.appendChild(stepDot);

    steps.push({
      stepDot,
      stepLine,
      stepLineHighlight,
    });

    if (steps.length === 1) {
      selectStep(0);
    }
    updateButtons();
  };

  const selectStep = (selectIndex) => {
    console.log("selecting step", selectIndex);
    steps.forEach(({ stepLine, stepDot }, index) => {
      if (index <= selectIndex) {
        stepDot.classList.add("stepDot--visited");
        stepLine?.classList.add("stepLine--visited");
      } else {
        stepDot.classList.remove("stepDot--visited");
        stepLine?.classList.remove("stepLine--visited");
      }
    });
    currentStep = selectIndex;

    updateButtons();
  };

  const updateButtons = () => {
    previousButton.disabled = currentStep === 0;
    nextButton.disabled = currentStep === steps.length - 1;
  };

  const previousStep = () => {
    if (currentStep > 0) {
      selectStep(currentStep - 1);
    }
  };

  const nextStep = () => {
    if (currentStep + 1 < steps.length) {
      selectStep(currentStep + 1);
    }
  };

  previousButton.addEventListener("click", previousStep);
  nextButton.addEventListener("click", nextStep);

  return {
    addStep,
    previousStep,
    nextStep,
  };
};

const progressSteps = createProgressSteps({
  containerId: "steps-container",
  previousButtonId: "previousButton",
  nextButtonId: "nextButton",
});
progressSteps.addStep();
progressSteps.addStep();
progressSteps.addStep();
progressSteps.addStep();
