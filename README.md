# RequestCatcher

RequestCatcher est une Firefox-WebExtension très simple, qui intercèpte toutes les données entrantes du navigateur, et télécharge toutes les images avec l'extension .png. Le code n'est pas très long et facilement compréhensible avec très peu de base en Js.

L'extension peut être chargée en accédant à la page about:debugging de firefox, puis "ce firefox" et "charger un module complémentaire temporaire", en sélectionnant le fichier manifest.json. 

# Attention

Même si cette extension est simple, elle peut être assez dangereuse et entrainer de gros ralentissement des capacités du navigateur. Il est donc déconseillé de la garder activée sur des sites axés sur la recherche d'image comme Google Image ou Pinterest (même si cela dépend aussi du début de connexion de l'ordinateur de l'utilisateur).
