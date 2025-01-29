import mysql2 from 'mysql2/promise';
import { config } from 'dotenv';

config();

const pool = mysql2.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE
});

const getUsers = async () => {
  const [rows] = await pool.query('SELECT * FROM users');
  console.log(rows);
};

getUsers();

const getProducts = async () => {
  const [rows] = await pool.query('SELECT * FROM products');
  console.log(rows);
};

getProducts();

const deleteProduct = async (Product_Code) => {
    const [data] = await pool.query('DELETE FROM products where Product_Code = ?', [Product_Code]);
    return data;
};

console.log(await deleteProduct('baro1'));

// const insertProduct = async (Product_Code, Product_Name, Product_Price, Product_Quantity) => {
//     const [data] = await pool.query('INSERT INTO products (Product_Code, Product_Name, Product_Price, Product_Quantity) values(?,?,?,?)', 
//         [Product_Code, Product_Name, Product_Price, Product_Quantity]);
//     return data;
// };

// console.log(await insertProduct('ktkt1','KitKat',10.99,4));

const updateExistingProduct = async ( Product_Name, Product_Price, Product_Quantity, Product_Code) => {
    let [data] = await pool.query(
        'UPDATE products SET Product_Name = ?, Product_Price = ?, Product_Quantity = ? WHERE (Product_Code = ?)',
        [ Product_Name, Product_Price, Product_Quantity, Product_Code]
    );
    return await getProducts();
};

updateExistingProduct('USN Whey',459.99,2,'usnw1');