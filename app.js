const profileDataArgs = process.argv.slice(2, process.arrgv.length);

const printProfileData = profileDataArr => {
    // this...
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    // is the same as
    profileDataArr.forEach(profileItem => {
        console.lod(profileItem);
    });
}

printProfileData(profileDataArgs);