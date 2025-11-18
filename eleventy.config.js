
export default function(eleventyConfig) {

  eleventyConfig.addPassthroughCopy({ public: '/' });

  eleventyConfig.addLiquidFilter("myDateString", function(date) {
    return `${date.getUTCMonth()+1}/${date.getUTCDate()}/${date.getUTCFullYear()}`;
  });

};
