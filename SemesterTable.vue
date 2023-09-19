<template>
  <section class="semester-table">
    <table>
      <thead>
        <tr>
          <th>Year</th>
          <th>Semester 1</th>
          <th>Semester 2</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(yearData, yearIndex) in years" :key="yearIndex">
          <td>{{ yearData.year }}</td>
          <td>{{ yearData.semester1 }}</td>
          <td>{{ yearData.semester2 }}</td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script>
export default {
  data() {
    return {
      years: [
        { year: 2023, semester1: '| SIT102, SIT112, SIT124, SIT182 |', semester2: '| MIS201, SIT103, SIT120, SIT224 |' },
        { year: 2024, semester1: 'TBD', semester2: 'TBD' },
        { year: 2025, semester1: 'TBD', semester2: 'TBD' },
      ],
    };
  },
};
</script>

<style scoped>

  .semester-table {
    text-align: center; 
    margin: 0 auto; 
  }
  </style>

