/**
 * Created by liujun on 2017/2/22.
 */
import {Injectable} from '@angular/core';
import {SQLite} from 'ionic-native';

/**
 * 注意，此处所以方法都是使用的promise异步方法，如果操作相应数据库之后想要使用
 * 数据读取方法一定要在操作返回的then中使用否则可能导致取不到修改后的数据
 * 每次调用操作或者读取方法之后在外部调用使用catch否则内部的意外错误不会被捕获
 * 导致程序崩溃
 */
@Injectable()
export class SQLiteService {
  public database: SQLite = new SQLite();

  //demo
  public create(): void {
    //初始化 database
    this.database.openDatabase({name: 'data.db', location: 'default'}).then(() => {
      console.log('1database open success!');
      this.database.executeSql('CREATE TABLE IF NOT EXISTS people (id INTEGER PRIMARY KEY AUTOINCREMENT, firstname TEXT, lastname TEXT)', {}).then((data) => {
        //data值为Object {rows: Object, rowsAffected: 0, insertId: undefined}
        console.log('TABLE CREATED: ', data);
      }, (error) => {
        console.error('Unable to execute sql',  error);
      });
    }, (error) => {
      console.log('ERROR: ',  error);
    });
  }

  //demo
  public add() : void{
    //初始化 database
    this.database.openDatabase({name: 'data.db', location: 'default'}).then(() => {
      console.log('2database open success!');
      this.database.executeSql('INSERT INTO people (firstname, lastname) VALUES ("Nic", "Raboy")', []).then((data) => {
        //data的值为{'rows':{'length':0},'rowsAffected':1,'insertId':7}
        console.log('INSERTED: ' + JSON.stringify(data));
      }, (error) => {
        console.log('ERROR: ' + error);
      });
    }, (error) => {
      console.log('ERROR: ',  error);
    });
  }

  /**
   * 更新及删除方法
   * @param sql  ==> 更新或删除的SQL语句
   * @returns {number} ==> 返回Promise
   */
  public execute(sql) : Promise<any>{
    //初始化 database
    return this.database.openDatabase({name: 'data.db', location: 'default'}).then(() => {
      console.log('database open success!');
      return this.database.executeSql(sql, []).then((data) => {
        console.log('INSERTED: ' + JSON.stringify(data));
        return Promise.resolve(data);
      }, (error) => {
        return Promise.reject(error);
      });
    }, (error) => {
      return Promise.reject(error);
    });
  }

  /**
   * 列表数据插入
   * @param dataList
   * @param tablename ===> 表名
   * @param sort ===> 排序字段
   * @param conditions
   * @returns {*}
   */
  public insertDataOfList (dataList: any[], tablename: string,sort ?: string,conditions ?: string) : Promise<any>{
    let len = dataList.length;
    let delSql = 'delete from ' + tablename + ' where 1 = 1 ';
    if(typeof conditions !== 'undefined' && conditions != null && conditions != ''){
      delSql += ' and ' + conditions;
    }
    if(typeof sort !== 'undefined' && sort != null && sort != ''){
      delSql += ' and ' + sort + ' is not null';
    }
    //初始化 database
    return this.database.openDatabase({name: 'data.db', location: 'default'}).then(() => {
      console.log('database open success!');
      return this.database.executeSql(delSql, []).then(() => {
        let dataArray = [];
        for (let i = 0; i < len; i++) {
          let obj = dataList[i];
          if (typeof sort !== 'undefined' && sort != null && sort != '') {
            obj[sort] = i;
          }
          let keys = '';
          let vals = [];
          let q_str = '';
          for (let attr in obj) {
            keys += attr + ',';
            vals.push(obj[attr]);
            q_str += '?' + ',';
          }
          keys = keys.substring(0, keys.length - 1);
          q_str = q_str.substring(0, q_str.length - 1);
          let query = 'insert into ' + tablename + '(' + keys + ') values(' + q_str + ')';
          let newarray = [query,vals];
          dataArray.push(newarray);
        }
        return this.database.sqlBatch(dataArray).then((data)=>{
          //这里其实没有返回值，如果走进外部成功回调即说明操作成功
          return Promise.resolve(data);
        }, (error) => {
          return Promise.reject(error);
        })
      }, (error) => {
        return Promise.reject(error);
      });
    }, (error) => {
      return Promise.reject(error);
    });
  }

  /**
   * 查询数据方法
   * @param tablename  ===> 表名
   * @param orderkey  ===> 排序字段 (先默认asc)
   * @param conditions
   * @param ordercon
   * @returns {*} 数据的list
   */
  public selectData (tablename: string, orderkey ?: string,conditions?: string ,ordercon ?: string) : Promise<any> {
    let query = '';
    query = 'select * from ' + tablename +' where 1 = 1 ';
    if(typeof conditions !== 'undefined' && conditions != null && conditions != ''){
      query = query + ' and ' + conditions;
    }
    if (typeof orderkey !== 'undefined' && orderkey != null && orderkey != '') {
      query =query + ' and '+orderkey+' is not null order by ' + orderkey +' ' + (ordercon?ordercon:' asc');
    }

    if(tablename !='city'&& tablename !='hometask' &&tablename !='companymain'){
      query += ' LIMIT 10 ';
    }


    //初始化 database
    return this.database.openDatabase({name: 'data.db', location: 'default'}).then(() => {
      console.log('database open success!');
      return this.database.executeSql(query, []).then((data) => {
        let resultlist = [];
        for (let i = 0;i < data.rows.length; i++) {
          resultlist.push(data.rows.item(i));
        }
        return Promise.resolve(resultlist);
      }, (error) => {
        return Promise.reject(error);
      });
    }, (error) => {
      return Promise.reject(error);
    });
  }

}
