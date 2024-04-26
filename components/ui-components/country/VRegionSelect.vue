<template>
  <v-select v-bind="computedProps"></v-select>
</template>

<script setup>
import { ref, computed, watch, defineProps, defineEmits } from "vue";
//   import { useI18n } from 'vue-i18n'; // If you're using vue-i18n for localization
import regions from "@/utils/countriesWithRegions.ts";

const props = defineProps({
  country: String,
  defaultRegion: { type: String, default: "AU" },
  countryName: { type: Boolean, default: false },
  whiteList: Array,
  blackList: Array,
  regionName: Boolean,
  usei18n: { type: Boolean, default: true },
  placeholder: { type: String, default: "Select a Region" },
});

const emit = defineEmits();

//   const { t } = useI18n(); // If you're using vue-i18n

const shownRegions = ref([]);
const ran = ref(false);

const valueType = computed(() => {
  return props.regionName ? "name" : "shortCode";
});

const autocompleteAttr = computed(() => {
  return props.autocomplete ? "address-level1" : "off";
});

const computedProps = computed(() => ({
  ...props,
  items: shownRegions.value,
  itemTitle: props.displayShortCode ? "shortCode" : "name",
  itemValue: props.countryName ? "countryName" : "countryShortCode",
  autocomplete: autocompleteAttr.value,
}));

function getRegionWithCountry(country) {
  country = country || props.country;
  let countryRegions = regions.find((elem) => {
    if (props.countryName) {
      return elem.countryName === country;
    } else {
      return elem.countryShortCode === country;
    }
  })?.regions;

  // if (t && props.usei18n) {
  //   countryRegions = countryRegions.map((region) => {
  //     let localeRegion = Object.assign({}, region);
  //     localeRegion.name = t(region.name);
  //     return localeRegion;
  //   });
  //   countryRegions.sort((region1, region2) => {
  //     return region1.name > region2.name ? 1 : -1;
  //   });
  // }

  if (props.whiteList) {
    countryRegions = countryRegions.filter((region) => {
      return props.whiteList.includes(region.shortCode);
    });
  }

  if (props.blackList) {
    countryRegions = countryRegions.filter((region) => {
      return !props.blackList.includes(region.shortCode);
    });
  }

  shownRegions.value = countryRegions;
  ran.value = true;
}

watch(
  () => props.country,
  (newVal, oldVal) => {
    if (oldVal !== "") {
      emit("input", "");
    }
    if (props.country) {
      getRegionWithCountry();
    } else {
      shownRegions.value = [];
    }
  }
);

// Mounted lifecycle hook
const onMounted = () => {
  if (props.country) {
    getRegionWithCountry();
  } else {
    getRegionWithCountry(props.defaultRegion);
  }
};

onMounted();
</script>
