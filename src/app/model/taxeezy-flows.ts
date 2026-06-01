import { InteractiveFlow } from '../types/gallery';

export const utrFlow: InteractiveFlow = {
  title: 'Taxeezy - UTR Registration Flow',
  key: 'taxeezy-UTR',
  startScreenId: '1',
  screens: {
    '1': {
      id: '1',
      hotspots: [{ x: 31, y: 75.5, width: 0, height: 0, targetScreenId: '2', tooltip: 'Open Accordion' }],
    },
    '2': {
      id: '2',
      hotspots: [{ x: 69, y: 49, width: 0, height: 0, targetScreenId: '3', tooltip: 'Go Identiy Verification' }],
    },
    '3': {
      id: '3',
      hotspots: [{ x: 68, y: 52.5, width: 0, height: 0, targetScreenId: '4', tooltip: 'Start Identity Verification' }],
    },
    '4': {
      id: '4',
      hotspots: [{ x: 92, y: 71.5, width: 0, height: 0, targetScreenId: '5', tooltip: 'Continue' }],
    },
    '5': {
      id: '5',
      hotspots: [{ x: 92, y: 38.5, width: 0, height: 0, targetScreenId: '6', tooltip: 'Continue' }],
    },
    '6': {
      id: '6',
      hotspots: [{ x: 50.5, y: 38.5, width: 0, height: 0, targetScreenId: '7', tooltip: 'Back to home' }],
    },
    '7': {
      id: '7',
      hotspots: [],
    },
  },
};

export const dashboardFlow: InteractiveFlow = {
  title: 'Taxeezy - Dashboard Info and Document Upload Flow',
  key: 'taxeezy-dashboard',
  startScreenId: '1',
  screens: {
    '1': {
      id: '1',
      hotspots: [{ x: 85.7, y: 70, width: 0, height: 0, targetScreenId: '2', tooltip: 'Open Accordion' }],
    },
    '2': {
      id: '2',
      hotspots: [{ x: 75, y: 74, width: 12, height: 6, targetScreenId: '3', tooltip: 'Go Identiy Verification' }],
    },
    '3': {
      id: '3',
      hotspots: [],
    },
  },
};

export const profileFlow: InteractiveFlow = {
  title: 'Taxeezy - Profile Setup Flow',
  key: 'taxeezy-profile',
  startScreenId: '1',
  screens: {
    '1': {
      id: '1',
      hotspots: [{ x: 94, y: 93.5, width: 5, height: 5, targetScreenId: '2', tooltip: 'Save' }],
    },
    '2': {
      id: '2',
      hotspots: [{ x: 70, y: 70, width: 5, height: 5, targetScreenId: '3', tooltip: 'Start Verification' }],
    },
    '3': {
      id: '3',
      hotspots: [{ x: 72.5, y: 53, width: 5, height: 5, targetScreenId: '4', tooltip: 'Continue Verification' }],
    },
    '4': {
      id: '4',
      hotspots: [{ x: 71, y: 54, width: 5, height: 5, targetScreenId: '5', tooltip: 'Continue Identity Verification' }],
    },
    '5': {
      id: '5',
      hotspots: [{ x: 50, y: 39, width: 5, height: 5, targetScreenId: '6', tooltip: 'Continue Identity Verification' }],
    },
    '6': {
      id: '6',
      hotspots: [],
    },
  },
};
