<template>
  <v-select v-bind="computedProps"></v-select>
</template>

<script setup>
import { ref, computed, defineProps } from "vue";
//   import { useI18n } from 'vue-i18n'; // If you're using vue-i18n for localization
import regions from "@/utils/countriesWithRegions.ts";

const props = defineProps({
  countryName: { type: Boolean, default: false },
  whiteList: Array,
  blackList: Array,
  displayShortCode: { type: Boolean, default: false },
  topCountry: { type: String, default: "" },
  placeholder: { type: String, default: "Select Country" },
  usei18n: { type: Boolean, default: true },
});

//   const { t } = useI18n(); // If you're using vue-i18n

const firstCountry = computed(() => {
  if (props.countryName) {
    if (props.topCountry.length === 2) {
      const regionObj = regions.find((region) => {
        return region.countryShortCode === props.topCountry;
      });
      return regionObj ? regionObj.countryName : ""; // Added a check in case regionObj is null or undefined
    } else {
      return props.topCountry;
    }
  }
  if (props.topCountry) {
    return props.topCountry;
  }
  return "";
});

const countries = computed(() => {
  let countryList = regions.filter((region) => {
    if (props.countryName) {
      return region.countryName !== firstCountry.value;
    } else {
      return region.countryShortCode !== firstCountry.value;
    }
  });

  if (firstCountry.value) {
    const tCountry = regions.find((region) =>
      props.countryName
        ? region.countryName === firstCountry.value
        : region.countryShortCode === firstCountry.value
    );
    if (tCountry) {
      countryList = [tCountry, ...countryList];
    }
  }

  if (props.whiteList) {
    countryList = countryList.filter((country) => {
      return props.whiteList.includes(country.countryShortCode);
    });
  }

  if (props.blackList) {
    countryList = countryList.filter((country) => {
      return !props.blackList.includes(country.countryShortCode);
    });
  }

  // if (t && props.usei18n) {
  //   countryList = countryList.map((country) => {
  //     let localeCountry = Object.assign({}, country);
  //     localeCountry.countryName = t(country.countryName);
  //     return localeCountry;
  //   });
  //   countryList.sort((country1, country2) => {
  //     return country1.countryName > country2.countryName ? 1 : -1;
  //   });
  // }

  return countryList;
});

const autocompleteAttr = computed(() => {
  const autocompleteType = (showsFullCountryName) =>
    showsFullCountryName ? "country-name" : "country";
  return props.autocomplete ? autocompleteType(props.countryName) : "off";
});

const computedProps = computed(() => ({
  ...props,
  items: countries.value,
  itemTitle: props.displayShortCode ? "countryShortCode" : "countryName",
  itemValue: props.countryName ? "countryName" : "countryShortCode",
  autocomplete: autocompleteAttr.value,
}));
</script>
