export class Data{

    id: number;
    memo: string;
    is_complete: boolean;
    complete_time: Date;
    target_time: Date;

    // /**
    //  * 
    //  * @param id ID
    //  * @param memo メモ本体
    //  * @param target_time 目標日時
    //  * 
    //  */

    // constructor(id: number, memo: string, target_time?: Date) {
    //     this.setId(id);
    //     this.setMemo(memo);
    //     this.is_complete = false;
    //     this.complete_time = null;
        
    //     if (target_time == null) {
    //         this.target_time = null;
    //     } else {
    //         this.setTarget_time(target_time);
    //     }
    // }
    
    // public getId(): number {
    //     return this.id;
    // }

    // public getMemo(): string {
    //     return this.memo;
    // }

    // public getIs_complete(): boolean {
    //     return this.is_complete;
    // }

    // public getComplete_time(): Date {
    //     return this.complete_time;
    // }

    // public getTarget_time(): Date {
    //     return this.target_time;
    // }

    // public setId(id: number): void{
    //     this.id = id;
    // }
    
    // public setMemo(memo: string): void{
    //     this.memo = memo;
    // }

    // public setIs_complete(is_complete: boolean): void{
    //     this.is_complete = is_complete;
    // }

    // public setComplete_time(complete_time: Date): void{
    //     this.complete_time = new Date(complete_time);
    // }

    // public setTarget_time(target_time: Date): void{
    //     this.target_time = new Date(target_time);
    // }


}


// デバッグ用
// let p = new data(3, 'test', new Date(2020, 4, 23, 1, 23));
// p.setIs_complete(true);
// p.setComplete_time(new Date(2021, 5, 4, 15, 28));

// console.log('\nid=' + p.getId() + '\nmemo=' + p.getMemo() + '\nis_complete='+p.getIs_complete()+'\ncomplete_time='+p.getComplete_time()+'\ntarget_time'+p.getTarget_time());
