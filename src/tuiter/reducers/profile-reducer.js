import { createSlice } from "@reduxjs/toolkit";

const profile = {
  "firstName": "Jiarong",
  "lastName": "Feng",
  "handle": "jf",
  "profilePicture": "profile-pic.webp",
  "bannerPicture": "banner.png",
  "bio": "NEU CS student",
  "website": "https://www.linkedin.com/in/jiarong-feng-17b184195/",
  "location": "San Jose, CA",
  "dateOfBirth": "09/27/1997",
  "dateJoined": "11/2022",
  "followingCount": 1,
  "followersCount": 0
}

const profileSlice = createSlice({
  name: "profile",
  initialState: profile,
  reducers: {
    updateProfile(state, action) {
      const updatedProfile = action.payload;
      let [firstName, ...lastName] = updatedProfile.name.split('/');
      lastName = lastName.join(' ');
      const bio = updatedProfile.bio;
      const location = updatedProfile.location;
      const website = updatedProfile.website;
      const [year, month, day] = updatedProfile.dateOfBirth.split('-');
      const dateOfBirth = [month, day, year].join('/');
      return {...state, firstName, lastName, bio, location, website, dateOfBirth}
    }
  }
});

export const {updateProfile} = profileSlice.actions;
export default profileSlice.reducer;