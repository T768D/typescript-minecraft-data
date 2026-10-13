Currently very much a work in progress
As of 13th Oct 2026 I don't currently have time to continue this, however I do want to resume work in the future

This takes types from minecraft-data and converts them into typescript definitions

Type definitions are organised by folders and files
types -> (pc/bedrock) -> (version number) -> (type files)

The type files types.d.ts and enums.d.ts are ambients because other type files need to access their types

The rest are modules because some type names are overlapping, and I want users to be able to import types and organise them based on folder and file structure, instead of having incredibly long type names

Implementation of the types will be different depending on the library used to parse the packets sent by minecraft