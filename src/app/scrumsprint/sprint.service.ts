import { Injectable } from '@angular/core';

interface Story {
  name: string;
  points: number;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class SprintService {
  private stories: Story[] = [];
  private selectedStories: Story[] = [];
  private readonly STORIES_KEY = 'stories';
  private readonly SELECTED_STORIES_KEY = 'selectedStories';

  constructor() { 
    this.loadFromLocalStorage();
  }

  private saveToLocalStorage() {
    localStorage.setItem(this.STORIES_KEY, JSON.stringify(this.stories));
    localStorage.setItem(this.SELECTED_STORIES_KEY, JSON.stringify(this.selectedStories));
  }

  private loadFromLocalStorage() {
    const storedStories = localStorage.getItem(this.STORIES_KEY);
    const storedSelectedStories = localStorage.getItem(this.SELECTED_STORIES_KEY);
    
    this.stories = storedStories ? JSON.parse(storedStories) : [];
    this.selectedStories = storedSelectedStories ? JSON.parse(storedSelectedStories) : [];
  }

  addStory(name: string, points: number, description: string): boolean {
    if (this.stories.some(story => story.name === name)) {
      return false;
    }
    
    this.stories.push({ name, points, description });
    this.saveToLocalStorage();
    return true;
  }

  getStories(): Story[] {
    return this.stories;
  }

  deleteStory(index: number): void {
    this.stories.splice(index, 1);
    this.saveToLocalStorage();
  }

  clearStories(): void {
    this.stories = [];
    this.selectedStories = [];
    this.saveToLocalStorage();
  }

  generateSprint(capacity: number): Story[] {
    this.selectedStories = [];
    let bestCombination: Story[] = [];
    let closestSum = 0;

    const storyCount = this.stories.length;
    const totalSubsets = 1 << storyCount; 

    const sortedStories = [...this.stories].sort((a, b) => 
      b.points - a.points || a.name.localeCompare(b.name)
    );

    for (let mask = 0; mask < totalSubsets; mask++) {
      let subset: Story[] = [];
      let total = 0;

      for (let i = 0; i < storyCount; i++) {
        if (mask & (1 << i)) {
          total += sortedStories[i].points;
          if (total > capacity) break;
          subset.push(sortedStories[i]);
        }
      }

      if (total <= capacity && total > closestSum) {
        closestSum = total;
        bestCombination = subset;
      }
    }

    this.selectedStories = bestCombination;
    this.saveToLocalStorage();

    if (this.selectedStories.length > 0) {
    } else {
    }

    return this.selectedStories;
  }

  getSelectedStories(): Story[] {
    return this.selectedStories;
  }

  clearSelectedStories(): void {
    this.selectedStories = [];
    this.saveToLocalStorage();
  }

  removeSelectedStory(index: number): void {
    this.selectedStories.splice(index, 1);
    this.saveToLocalStorage();
  }
}
