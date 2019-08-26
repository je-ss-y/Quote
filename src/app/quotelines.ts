export class Quotelines {
    showDescription: boolean;
    constructor(public id: number,public name: string, public authorName: string, public description: string,public completeDate: Date){
      this.showDescription=false;
    }
  }