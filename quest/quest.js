import quests from '../data.js';
import { findById, renderQuestSection } from './questUtils.js';

const questMain = document.querySelector('main');

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const questData = findById(quests, questId);

const sectionElement = renderQuestSection(questData);

questMain.append(sectionElement);

console.log('Quest page of The Tale of Derp');