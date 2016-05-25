function database() {
    Ti.API.info('estoy en db file');
    var db;
    this.openDatabase = function() {
        var dbFileName = String.format('file://data/data/%s/databases/' + Ti.App.Properties.getString('databaseVersion'), Ti.App.getID());
        var dbFile = Ti.Filesystem.getFile(dbFileName);
        if (!db) {

            if (dbFile.size > 0) {
                db = Ti.Database.open(Ti.App.Properties.getString('databaseVersion'));
            } else {
                db = Ti.Database.install('/db/hoteles.sqlite', Ti.App.Properties.getString('databaseVersion'));
            }
        }
        return db;
    };
    this.closeDatabase = function (){
        if (db){
            db.close();
            db = null;
        }
    };
    this.addHotel = function (arg) {
        Ti.API.info('=> addHotel(): ' + JSON.stringify(arg));
        var hotelId = arg.hotelId,
        name = arg.name,
        distance = arg.distance,
        price = arg.price,
        urlPhoto = arg.urlPhoto;
        
       
       /*
        Ti.API.info(' => artistId: ' + artistId );
        Ti.API.info(' => artistName: ' + artistName );
        Ti.API.info(' => collectionName: ' + collectionName );
        Ti.API.info(' => trackName: ' + trackName );
        Ti.API.info(' => artworkURL: ' + artworkUrl100 );
       */ 
        this.openDatabase();
        db.execute('BEGIN IMMEDIATE TRANSACTION');
        db.execute('INSERT INTO hotel (hotelId,name,distance,price,urlPhoto) VALUES(?,?,?,?,?)', hotelId, name, distance, price, urlPhoto);
        db.execute('COMMIT TRANSACTION');
        this.closeDatabase();
        
        
    };
    
    this.deleteData = function(){
        this.openDatabase();
        db.execute('BEGIN IMMEDIATE TRANSACTION');
        db.execute('DELETE from hotel');
        db.execute('COMMIT TRANSACTION');
        this.closeDatabase();
    };
    
    this.getListHotelsFromDB = function(){
        
        var listData = [],
        listAux = [],
        resultSet;
        
        this.openDatabase();
        db.execute('BEGIN IMMEDIATE TRANSACTION');
        resultSet = db.execute('SELECT * from hotel LIMIT 1');
        var x = 0;
        
        while (resultSet.isValidRow()){
            var list = {};
            list['hotelId'] = resultSet.fieldByName('hotelId');
            list['name'] = resultSet.fieldByName('name');
            list['distance'] = resultSet.fieldByName('distance');
            list['price'] = resultSet.fieldByName('price');
            list['urlPhoto'] = resultSet.fieldByName('urlPhoto');
            listData.push(list);
            
            resultSet.next();
        }
        listAux.push({'results':listData});
        resultSet.close();
        db.execute ('COMMIT TRANSACTION');
        this.closeDatabase();
        //listData.push({resultCount:20});
        Ti.API.info('listData: ' + JSON.stringify(listData));
        Ti.API.info('listAux: ' + JSON.stringify(listAux));
        return listAux;
    };
    
    
};
module.exports = database;
