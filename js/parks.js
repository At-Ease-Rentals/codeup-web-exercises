"use strict";

let parks = [
	{
		"Name": "Yellowstone National Park",
		"Location": "Wyoming, Montana, and Idaho, USA",
		"Facts": [
			{
				"Fact1": "Yellowstone was the world's first national park," +
					" established in 1872."
			},
			{
				"Fact2": "It is home to the famous Old Faithful geyser," +
					" which erupts at regular intervals."
			},
			{
				"Fact3": "Yellowstone is known for its diverse wildlife," +
					" including grizzly bears, wolves, bison, and elk."
			},
			{
				"Fact4": "The park features a massive supervolcano beneath" +
					" its surface, leading to its geothermal wonders."
			}
		]
	},
	{
		"Name": "Serengeti National Park",
		"Location": "Northern Tanzania",
		"Facts": [
			{
				"Fact1": "The Serengeti is renowned for hosting the annual" +
					" Great Migration of wildebeest and zebra."
			},
			{
				"Fact2": "It is home to the 'Big Five' - lions, elephants," +
					" leopards, buffalo, and rhinoceros."
			},
			{
				"Fact3": "The park's name, 'Serengeti,' is derived from the" +
					" Maasai language and means 'Endless Plains.'"
			},
			{
				"Fact4": "Serengeti National Park is a UNESCO World Heritage" +
					" Site, recognized for its biodiversity."
			}
		]
	},
	{
		"Name": "Banff National Park",
		"Location": "Alberta, Canada",
		"Facts": [
			{
				"Fact1": "Banff is Canada's oldest national park," +
					" established in 1885."
			},
			{
				"Fact2": "It encompasses stunning mountain landscapes," +
					" glaciers, and pristine lakes, including Lake Louise and Moraine Lake."
			},
			{
				"Fact3": "The park is a part of the Canadian Rocky Mountain" +
					" Parks, a UNESCO World Heritage Site."
			},
			{
				"Fact4": "Visitors can spot a wide range of wildlife in the" +
					" park, including grizzly bears, elk, and bighorn sheep."
			}
		]
	},
	{
		"Name": "Galápagos National Park",
		"Location": "Galápagos Islands, Ecuador",
		"Facts": [
			{
				"Fact1": "The Galápagos Islands were the inspiration for" +
					" Charles Darwin's theory of evolution by natural selection."
			},
			{
				"Fact2": "The park is a UNESCO World Heritage Site and a" +
					" biological marine reserve."
			},
			{
				"Fact3": "It is home to unique wildlife, such as the" +
					" Galápagos tortoise, marine iguanas, and blue-footed boobies."
			},
			{
				"Fact4": "Strict regulations are in place to protect the" +
					" delicate ecosystem, including visitor quotas and designated paths."
			}
		]
	}
];

function parkFacts(){
	for (let i = 0; i < parks.length; i++) {
		let parkLists = document.querySelector('#national-parks');
		parkLists[i].innerHTML ="<h3> `${Name[i]}</h3>" + "<ul><li>`${Fact[i]}</li></ul>";
	}
}