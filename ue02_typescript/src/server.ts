// Node.js Modul
// import * as http from 'http';

import * as path from 'path';


import * as express from 'express'; /*Frameworker; hat zusätzliche Tools für Web Programmierung; über node package-Manager installieren; */
                                    /*alles was in Express enthalen ist, kann mittels express abgerufen werden */

export class Server {

    private _port: number;              /*name : Datentyp (unter Java Datentyp Name) ; Number = alle Arten von Zahlen*/
    private _server: express.Express;

    public constructor (port: number) {        /*Konstruktor mit Schlüsselwort constructor; nur 1 Konstruktor in TS automatisch public
                                                (in Java mehrer Konstruktoren)*/
        this._port = port;
        this._server = express();       /*wie ich es aufrufe finde ich unter: im Internet(meist README.md Datei) */
        this._server.get('/liste', (req, res, next) => this.handleGetListe(req, res, next));  /*(req, resp, next) ruft Handlermethode auf
                                                                                                welche zum Objekt gebudnen ist */
        this._server.get('/image.png', (req, res, next) => this.handleGetImage(res));

    }

    public start () {
        this._server.listen(this._port);
        console.log('HTTP Server gestartet auf Port ' + this._port);    /*Meldung wird am Bildschirm ausgegeben(kann auch dirket
                                                                        in console ausgegeben werden) */
    }

    public get port () {    /*kann man auch wie in Java machen; port steht hier als Attribut zur Verfügung */
        return this._port;

    }

    private handleGetListe(req: express.Request, res: express.Response, next: express.NextFunction) {

        const filePath = path.join(__dirname, '..', 'assets', 'liste.html');
        console.log(filePath);
        res.sendFile(filePath);
    }

    private handleGetImage(res: express.Response) {
        const filePath = path.join(__dirname, '..', 'assets', 'image.png');
        res.sendFile(filePath);
    }
}
