/*
 * Copyright (c) 2021, salesforce.com, inc.
 * All rights reserved.
 * SPDX-License-Identifier: MIT
 * For full license text, see the LICENSE file in the repo root or https://opensource.org/licenses/MIT
 */
import { createLdsTestWireAdapter } from '@salesforce/wire-service-jest-util';

export const createDataConnector = jest.fn();
export const createDataflowJob = jest.fn();
export const createDataset = jest.fn();
export const createDatasetVersion = jest.fn();
export const createReplicatedDataset = jest.fn();
export const deleteDataConnector = jest.fn();
export const deleteDataset = jest.fn();
export const deleteRecipe = jest.fn();
export const deleteReplicatedDataset = jest.fn();
export const executeQuery = createLdsTestWireAdapter(jest.fn());
export const getActions = createLdsTestWireAdapter(jest.fn());
export const getAnalyticsLimits = createLdsTestWireAdapter(jest.fn());
export const getDataConnector = createLdsTestWireAdapter(jest.fn());
export const getDataConnectors = createLdsTestWireAdapter(jest.fn());
export const getDataConnectorSourceFields = createLdsTestWireAdapter(jest.fn());
export const getDataConnectorSourceObject = createLdsTestWireAdapter(jest.fn());
export const getDataConnectorSourceObjectDataPreviewWithFields = createLdsTestWireAdapter(
    jest.fn(),
);
export const getDataConnectorSourceObjects = createLdsTestWireAdapter(jest.fn());
export const getDataConnectorStatus = createLdsTestWireAdapter(jest.fn());
export const getDataConnectorTypes = createLdsTestWireAdapter(jest.fn());
export const getDataflowJob = createLdsTestWireAdapter(jest.fn());
export const getDataflowJobNode = createLdsTestWireAdapter(jest.fn());
export const getDataflowJobNodes = createLdsTestWireAdapter(jest.fn());
export const getDataflowJobs = createLdsTestWireAdapter(jest.fn());
export const getDataflows = createLdsTestWireAdapter(jest.fn());
export const getDataset = createLdsTestWireAdapter(jest.fn());
export const getDatasets = createLdsTestWireAdapter(jest.fn());
export const getDatasetVersion = createLdsTestWireAdapter(jest.fn());
export const getDatasetVersions = createLdsTestWireAdapter(jest.fn());
export const getDependencies = createLdsTestWireAdapter(jest.fn());
export const getRecipe = createLdsTestWireAdapter(jest.fn());
export const getRecipeNotification = createLdsTestWireAdapter(jest.fn());
export const getRecipes = createLdsTestWireAdapter(jest.fn());
export const getReplicatedDataset = createLdsTestWireAdapter(jest.fn());
export const getReplicatedDatasets = createLdsTestWireAdapter(jest.fn());
export const getReplicatedFields = createLdsTestWireAdapter(jest.fn());
export const getSchedule = createLdsTestWireAdapter(jest.fn());
export const getSecurityCoverageDatasetVersion = createLdsTestWireAdapter(jest.fn());
export const getWaveFolders = createLdsTestWireAdapter(jest.fn());
export const getWaveTemplate = createLdsTestWireAdapter(jest.fn());
export const getWaveTemplateConfig = createLdsTestWireAdapter(jest.fn());
export const getWaveTemplateReleaseNotes = createLdsTestWireAdapter(jest.fn());
export const getWaveTemplates = createLdsTestWireAdapter(jest.fn());
export const getXmd = createLdsTestWireAdapter(jest.fn());
export const ingestDataConnector = jest.fn();
export const updateDataConnector = jest.fn();
export const updateDataflowJob = jest.fn();
export const updateDataset = jest.fn();
export const updateDatasetVersion = jest.fn();
export const updateRecipe = jest.fn();
export const updateRecipeNotification = jest.fn();
export const updateReplicatedDataset = jest.fn();
export const updateReplicatedFields = jest.fn();
export const updateSchedule = jest.fn();
export const updateXmd = jest.fn();
