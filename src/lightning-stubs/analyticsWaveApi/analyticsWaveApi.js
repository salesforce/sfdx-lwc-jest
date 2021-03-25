/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createLdsTestWireAdapter } from '@salesforce/wire-service-jest-util';

export const createDataflowJob = jest.fn();
export const deleteDataset = jest.fn();
export const deleteRecipe = jest.fn();
export const executeQuery = createLdsTestWireAdapter(jest.fn());
export const getAnalyticsLimits = createLdsTestWireAdapter(jest.fn());
export const getDataflowJob = createLdsTestWireAdapter(jest.fn());
export const getDataflowJobNode = createLdsTestWireAdapter(jest.fn());
export const getDataflowJobNodes = createLdsTestWireAdapter(jest.fn());
export const getDataflowJobs = createLdsTestWireAdapter(jest.fn());
export const getDataset = createLdsTestWireAdapter(jest.fn());
export const getDatasets = createLdsTestWireAdapter(jest.fn());
export const getRecipe = createLdsTestWireAdapter(jest.fn());
export const getRecipes = createLdsTestWireAdapter(jest.fn());
export const getReplicatedDatasets = createLdsTestWireAdapter(jest.fn());
export const getSchedule = createLdsTestWireAdapter(jest.fn());
export const getWaveFolders = createLdsTestWireAdapter(jest.fn());
export const getXmd = createLdsTestWireAdapter(jest.fn());
export const updateDataflowJob = jest.fn();
export const updateSchedule = jest.fn();
