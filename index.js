const app = "I don't do much."
var kittens = ["Milo", "Otis", "Garfield"]
var name = "Taz Kitty"
var array = kittens

function destructivelyAppendKitten(name) {
  kittens.push(name)
  return kittens
}
