db.updateUser("root", {
  roles: [
    { role: "root", db: "admin" },
    { role: "clusterMonitor", db: "admin" },
    { role: "read", db: "local" },
  ],
});

db.products.insertMany([
  { name: "Laptop", price: 1000, stock: 50 },
  { name: "Smartphone", price: 700, stock: 100 },
  { name: "Tablet", price: 400, stock: 80 }
]);
db.templateCollection.insertMany([
    { name: "templateData1", value: "sample1" },
    { name: "templateData2", value: "sample2" },
    { name: "templateData3", value: "sample3" },
    { name: "templateData4", value: "sample4" },
    { name: "templateData5", value: "sample5" },
    { name: "templateData6", value: "sample6" },
    { name: "templateData7", value: "sample7" },
    { name: "templateData8", value: "sample8" },
    { name: "templateData9", value: "sample9" },
    { name: "templateData10", value: "sample10" },
    { name: "templateData11", value: "sample11" },
    { name: "templateData12", value: "sample12" },
    { name: "templateData13", value: "sample13" },
    { name: "templateData14", value: "sample14" },
    { name: "templateData15", value: "sample15" },
    { name: "templateData16", value: "sample16" },
    { name: "templateData17", value: "sample17" },
    { name: "templateData18", value: "sample18" },
    { name: "templateData19", value: "sample19" },
    { name: "templateData20", value: "sample20" },
    { name: "templateData21", value: "sample21" },
    { name: "templateData22", value: "sample22" },
    { name: "templateData23", value: "sample23" },
    { name: "templateData24", value: "sample24" },
    { name: "templateData25", value: "sample25" },
    { name: "templateData26", value: "sample26" },
    { name: "templateData27", value: "sample27" },
    { name: "templateData28", value: "sample28" },
    { name: "templateData29", value: "sample29" },
    { name: "templateData30", value: "sample30" }
  ]);