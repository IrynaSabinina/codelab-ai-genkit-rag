/**
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { genkit } from 'genkit';
import { enableFirebaseTelemetry } from '@genkit-ai/firebase';
import { vertexAI } from '@genkit-ai/vertexai';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyALn8cl1YfitpkztD9IEMoFQke5j47yAIc',
  authDomain: 'ai-codelab-test1.firebaseapp.com',
  projectId: 'ai-codelab-test1',
  storageBucket: 'ai-codelab-test1.firebasestorage.app',
  messagingSenderId: '589052657500',
  appId: '1:589052657500:web:dd47ddf881851402710b99',
};

export const getProjectId = () => firebaseConfig.projectId;

enableFirebaseTelemetry({ projectId: getProjectId() });

export const ai = genkit({
  plugins: [
    vertexAI({
      projectId: getProjectId(),
      location: 'us-central1',
    }),
  ],
});
