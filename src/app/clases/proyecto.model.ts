export class proyecto {
    private _nombreProyecto: string;
    private _presupuesto: string;

    constructor (){
        this._nombreProyecto = ''
        this._presupuesto = ''
    }

    public getnombreProyecto(): string {
        return this._nombreProyecto;
    }
    public setnombreProyecto(value: string) {
        this._nombreProyecto = value;
    }
    
    public getpresupuesto(): string {
        return this._presupuesto;
    }
    public setpresupuesto(value: string) {
        this._presupuesto = value;
    }
}

