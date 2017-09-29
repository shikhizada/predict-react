/**
 * Created by Tõnis Kasekamp on 20.09.2017.
 */
import {createPayloadForwardingAction} from './index';

export const JOBS_REQUESTED = 'JOBS_REQUESTED';
export const jobsRequested = createPayloadForwardingAction(JOBS_REQUESTED);

export const JOBS_RETRIEVED = 'JOBS_RETRIEVED';
export const jobsRetrieved = createPayloadForwardingAction(JOBS_RETRIEVED);

export const JOBS_FAILED = 'JOBS_FAILED';
export const jobsFailed = createPayloadForwardingAction(JOBS_FAILED);

export const TRAINING_SUBMITTED = 'TRAINING_SUBMITTED';
export const submitTraining = createPayloadForwardingAction(TRAINING_SUBMITTED);

export const TRAINING_SUCCEEDED = 'TRAINING_SUCCEEDED';
export const trainingSucceeded = createPayloadForwardingAction(TRAINING_SUCCEEDED);

export const TRAINING_FAILED = 'TRAINING_FAILED';
export const trainingFailed = createPayloadForwardingAction(TRAINING_FAILED);
