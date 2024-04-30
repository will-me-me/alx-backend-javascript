/// <reference path="./crud.d.ts" />
import { RowID, RowElement } from "./interface";
import * as CRUD from "./crud.js";

const obj = { firstName: "Guillaume", lastName: "Salva" };
CRUD.insertRow(obj);
const updatedRow: RowElement = {
  firstName: "Guillaume",
  lastName: "Salva",
  age: 23,
};
CRUD.updateRow(125, updatedRow);
CRUD.deleteRow(125);
