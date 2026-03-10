# Skill: linear-pr

## Objectif
Standardiser un workflow Linear → implémentation → PR, avec validation utilisateur explicite avant les actions distantes.

## Étapes
1. Demander l'URL du ticket Linear si absente.
2. Récupérer ticket/projet/initiative via Linear MCP quand disponible.
3. Résumer le ticket en 3 puces courtes.
4. Demander si l'utilisateur veut fournir des fichiers clés avant exploration large.
5. Vérifier `git status` et la branche courante.
6. Mettre à jour `main` de manière sûre.
7. Créer une branche feature avec la clé issue (`<issue-key>-<description-courte>`).
8. Implémenter avec le plus petit diff raisonnable.
9. Lancer lint/tests pertinents.
10. Résumer changements + limites/caveats.
11. Demander validation de vérification locale avant commit/push.
12. Seulement après accord explicite : commit, push, ouverture PR.
13. Rédiger une description de PR concise (ticket, projet, initiative).
14. Proposer un message Slack court de demande de review.

## Rappels
- Privilégier des changements reviewables.
- Réutiliser l'existant avant d'ajouter de nouvelles abstractions.
- Toujours expliciter ce qui a été validé automatiquement vs localement.
