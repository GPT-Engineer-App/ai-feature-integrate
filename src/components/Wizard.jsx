import { useState } from 'react';
import { Box } from '@chakra-ui/react';
import Onboarding from '../pages/Onboarding';
import DataIntegration from '../pages/DataIntegration';
import ModelSelection from '../pages/ModelSelection';
import TrainingEvaluation from '../pages/TrainingEvaluation';

const steps = [
  { name: 'Onboarding', component: Onboarding },
  { name: 'Data Integration', component: DataIntegration },
  { name: 'Model Selection', component: ModelSelection },
  { name: 'Training Evaluation', component: TrainingEvaluation },
];

const Wizard = () => {
  const [currentStep, setCurrentStep] = useState(0);

  const CurrentStepComponent = steps[currentStep].component;

  return (
    <Box>
      <CurrentStepComponent />
    </Box>
  );
};

export default Wizard;