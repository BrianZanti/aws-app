import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let resumes = [
      {
        id: 1, 
        name: 'Brian William Zanti',
        content: '<h1>Content</h1>',
        userId: 1,
        creationDate: 2014,
        lastEditDate: 2017
      },      
    ];
    return {resumes};
  }
}
