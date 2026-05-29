import { InteractiveFlow } from '../types/gallery';

export const utrFlow: InteractiveFlow = {
  title: 'Taxeezy - UTR Setup Flow',
  key: 'taxeezy-UTR',
  startScreenId: '1',
  screens: {
    '1': {
      id: '1',
      hotspots: [{ x: 26, y: 73, width: 10, height: 6, targetScreenId: '2', tooltip: 'Open Accordion' }],
    },
    '2': {
      id: '2',
      hotspots: [{ x: 64, y: 45.5, width: 10, height: 7, targetScreenId: '3', tooltip: 'Go Identiy Verification' }],
    },
    '3': {
      id: '3',
      hotspots: [{ x: 64, y: 45.5, width: 10, height: 7, targetScreenId: '4', tooltip: 'Start Identity Verification' }],
    },
    '4': {
      id: '4',
      hotspots: [{ x: 64, y: 45.5, width: 10, height: 7, targetScreenId: '5', tooltip: 'Continue' }],
    },
    '5': {
      id: '5',
      hotspots: [{ x: 64, y: 45.5, width: 10, height: 7, targetScreenId: '6', tooltip: 'Continue' }],
    },
    '6': {
      id: '6',
      hotspots: [{ x: 64, y: 45.5, width: 10, height: 7, targetScreenId: '7', tooltip: 'Back to home' }],
    },
    '7': {
      id: '7',
      hotspots: [],
    },
  },
};

export const dashboardFlow: InteractiveFlow = {
  title: 'Taxeezy - UTR Setup Flow',
  key: 'taxeezy-dashboard',
  startScreenId: '1',
  screens: {
    '1': {
      id: '1',
      hotspots: [{ x: 72, y: 68, width: 12, height: 6, targetScreenId: '2', tooltip: 'Open Accordion' }],
    },
    '2': {
      id: '2',
      hotspots: [{ x: 72, y: 68, width: 12, height: 6, targetScreenId: '3', tooltip: 'Go Identiy Verification' }],
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
      hotspots: [
        { x: 92, y: 55, width: 5, height: 5, targetScreenId: '2', tooltip: 'Open Accordion' },
        { x: 3, y: 16, width: 5, height: 5, targetScreenId: '3', tooltip: 'Go Identify Verification' },
      ],
    },
    '2': {
      id: '2',
      hotspots: [
        { x: 0, y: 8, width: 5, height: 5, targetScreenId: '3', tooltip: 'Go Identiy Verification' },
        { x: 92, y: 92, width: 5, height: 5, targetScreenId: '3', tooltip: 'Go Identify Verification' },
      ],
    },
    '3': {
      id: '3',
      hotspots: [{ x: 68, y: 68, width: 5, height: 5, targetScreenId: '4', tooltip: 'Start Identity Verification' }],
    },
    '4': {
      id: '4',
      hotspots: [
        { x: 6, y: 16, width: 5, height: 5, targetScreenId: '3', tooltip: 'Go Identiy Verification' },
        { x: 70, y: 51, width: 5, height: 5, targetScreenId: '5', tooltip: 'Continue Identity Verification' },
      ],
    },
    '5': {
      id: '5',
      hotspots: [{ x: 70, y: 51, width: 5, height: 5, targetScreenId: '1', tooltip: 'Submit Identity Verification' }],
    },
  },
};
