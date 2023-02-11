const createProgressSteps = ({ containerId }) => {
  const steps = [];
  let currentStep = 0;

  const container = document.getElementById(containerId);

  const addStep = () => {
    let stepLine = null;
    if (steps.length) {
      stepLine = document.createElement("span");
      stepLine.classList.add("stepLine");
      container.appendChild(stepLine);
    }
    const stepDot = document.createElement("span");
    stepDot.innerHTML = steps.length + 1;
    stepDot.classList.add("stepDot");
    container.appendChild(stepDot);

    steps.push({
      stepLine,
      stepDot,
    });

    if (steps.length === 1) {
      selectStep(0);
    }
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
  };

  const previousStep = () => {
    selectStep(currentStep > 0 ? currentStep - 1 : steps.length - 1);
  };

  const nextStep = () => {
    selectStep(currentStep + 1 < steps.length ? currentStep + 1 : 0);
  };

  return {
    addStep,
    previousStep,
    nextStep,
  };
};

const progressSteps = createProgressSteps({ containerId: "steps-container" });
progressSteps.addStep();
progressSteps.addStep();
progressSteps.addStep();
progressSteps.addStep();

document
  .getElementById("previousButton")
  .addEventListener("click", progressSteps.previousStep);

document
  .getElementById("nextButton")
  .addEventListener("click", progressSteps.nextStep);
