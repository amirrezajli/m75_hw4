let myList = [
  {
    name: "pejman",
    family: "jamshidi",
  },
  {
    name: "kamran",
    family: "molaee",
  },
  {
    name: "pouya",
    family: "jalili",
  },
  {
    name: "peyman",
    family: "malek",
  },
];
function filterList(list, start, end) {
  return list.filter(function (mlt) {
    let name = mlt.name;
    let family = mlt.family;
    return name[0] === start && family[family.length - 1] === end;
  });
}

let filtered = filterList(myList, "p", "i");
console.log(filtered);
