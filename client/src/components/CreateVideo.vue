<template>
  <div>
    <form action="">
      <div>
        <label for="title">Title</label>
        <input type="text" v-model="title" name="title" />
      </div>
       <div>
        <label for="poster">Poster</label>
        <input type="file"  name="poster" />
      </div>
      <div>
        <label for="synopsis">Synopsis</label>
        <input type="text" v-model="synopsis" name="synopsis" />
      </div>
      <div>
        <label for="directors">directors</label>
        <input type="text" v-model="directors" name="directors" />
      </div>
      <div>
        <label for="writers">writers</label>
        <input type="text" v-model="writers" name="writers" />
      </div>
      <div>
        <label for="release_date">release date</label>
        <input type="text" v-model="release_date" name="release_date" />
      </div>
      <div>
        <label for="cast">cast</label>
        <input type="text" v-model="cast" name="cast" />
      </div>
      <div>
        <label for="genre">genre</label>
        <input type="text" v-model="genre" name="genre" />
      </div>
      <div>
        <label for="average_rating"
          >rating
          <input type="text" v-model="average_rating" name="average_rating" />
        </label>
      </div>

      <base-button type="submit"> Submit</base-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      synopsis: "",
      directors: "",
      writers: "",
      release_date: "",
      cast: "",
      genre: "",
      average_rating: "",
      poster: ""
    };
  },
  components: {},
};
</script>

<style lang="scss" scoped></style>
