"use strict";

console.log('test');

const tree = {
  husband: "Frank Tzope Sr",
  wife: "Anna Kore",
  children: [
    {
      son: "Frank Tzope Jr",
      wife: "Sue Miller",
      children: [
        {
          daughter: "Dorothy Smickley",
          husband: "Ralph Smickley",
          children: [
            { son: "Mark Smickley" },
            {
              son: "Glenn Smickley",
              wife: "Bambi Smickley",
              children: [
                { son: "Kyle Smickley" },
                { daughter: "Kara Smickley" },
                { daughter: "Krista Smickley" }
              ]
            },
            {
              son: "Scott Smickley",
              wife: "Catherine Smickley",
              children: [
                {
                  daughter: "Megan McDonald",
                  husband: "Tom McDonald",
                  children: [ { unknown: "? McDonald" } ]
                },
                { son: "Brock Smickley" }
              ]
            }
          ]
        },
        { daughter: "Genevieve Miller" }
      ]
    },
    {
      daughter: "Julia Soumaroloff",
      husband: "Jim Soumaroloff",
      children: [
        {
          daughter: "Gail Drexler",
          husband: "Marty Drexler",
          children: [
            {
              daughter: "Alexandra Drexler",
              husband: "Daryl Drexler"
            },
            { son: "Nicholas Drexler" }
          ]
        },
        { daughter: "Juliana Soumaroloff" },
        {
          daughter: "Jennie Doffey",
          husband: "Jim Doffey"
        }
      ]
    },
    {
      daughter: "Marie Olsen",
      husband: "Bill Olsen"
    },
    {
      daughter: "Helen Bennicas",
      husband: "Roy Bennicas",
      children: [
        {
          daughter: "Rosemarie Thomas",
          husband: "George Thomas",
          children: [
            {
              daughter: "Kelly Thomas",
              husband: "Phil P",
              children: [
                { son: "Noah" },
                { daughter: "Melissa" }
              ]
            },
            {
              daughter: "Erin Thomas",
              husband: "Lionel Abel",
              children: [
                { daughter: "Haley" }
              ]
            },
            {
              daughter: "Shannon Thomas",
              husband: "Nathaniel Nicks",
              children: [
                { son: "Leo" }
              ]
            }
          ]
        },
        {
          unknown: "K",
          spouse: "",
          children: [
            {}, {}, {}
          ]
        },
        {
          unknown: "M",
          spouse: "",
          children: [
            {}, {}
          ]
        }
      ]
    },
    {
      daughter: "Barbara Faust",
      husband: "? Faust",
      children: [
        {
          son: "Bill Faust",
          wife: "D Faust",
          children:[
            { daughter: "Linda Faust" }
          ]
        },
        {
          son: "Tommy Faust",
          wife: "Laurie Faust",
          children: [
            { daughter: "Ashley Faust" }
          ]
        }
      ]
    },
    {
      son: "George Tzope",
      wife: "Sue",
      children: [
        {
          daughter: "Joanne Grimm",
          husband: "Gene Grimm",
          children: [ {}, {}, {} ]
        }
      ]
    },
    {
      daughter: "Elizabeth Foster",
      husband: "Ted Foster",
      children: [
        {
          daughter: "Betsy Costa",
          husband: "Degan Costa",
          children: [ { daughter: "Deanna Costa" } ]
        },
        {
          daughter: "Susie Kelly",
          husband: "Greg Kelly",
          children: [
            {
              husband: "Randy Kelly",
              wife: "Wendy Kelly"
            }
          ]
        },
        {
          daughter: "Annie Singler",
          husband: "Phil Singler",
          children: [
            { son: "Eric Singler" },
            { son: "Ben Singler" }
          ]
        }
      ]
    },
    {
      daughter: "Ann (Enka)",
      husband: "Pledger"
    },
    {
      daughter: "Catherine",
      husband: "Quno Bueechi"
    }
  ]
};

const build = (family) => {
  return `
    <div class="family">
      ${
        family.husband || family.wife || family.spouse ?
        `
          <div class="parents">
            <div class="partnerLeft">
              ${ family.son || family.daughter || family.unknown }
            </div>
            <div class="partnerRight">
              ${ family.husband || family.wife || family.spouse }
            </div>
          </div>
        ` :
        `
          <div class="individual">
            ${ family.son || family.daughter || family.unknown }
          </div>
        `
      }
      ${
        family.children ?
        `
          <div class="lines" />
          <div class="children">
            ${family.children.map(child => build(child))}
          </div>
        ` : ''
      }
    </div>
  `;
};

$(`#root`).html(`
  <div class="parents">
    <div class="partnerLeft">${tree.husband}</div>
    <div class="partnerRight">${tree.wife}</div>
  </div>
  <div class="lines" />
  <div class="children">
    ${tree.children.map(child => build(child))}
  </div>
`);
