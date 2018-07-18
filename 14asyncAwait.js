const myPromise = new Promise((resolve, reject) => {
  resolve('bob')
});

// async in front of fct declaration
async function main() {
  // await in front of whatever is resolved from a fct and then returned into a const for instance
  const name = await myPromise;
  name;
}
main();

// try catch example
function getName() {
  // don't forget to return the Promise!
  return Promise.resolve('anna');
}

function getAge() {
  // don't forget to return the Promise!
  return Promise.reject('errrroooor');
}

async function more () {
  try {
    const name = await getName();
    const age = await getAge();
    name;
    age;
  } catch (err) {
    console.log(err);
  }
}
more();

// This is to execute the functions at the same time, 
// so we don't wait for the frist await and then only run the second
function getHome() {
  return Promise.resolve('Calgary');
}

function getJob() {
  return Promise.resolve('Crap');
}

async function last () {
  try {
    const [home, job] = await Promise.all([
      getHome(),
      getJob()
    ]);
    home;
    job;
  } catch (err) {
    console.log(err);
  }
}
last();

