//all dtos need to reference these decorators from this file, not their actual import paths
//the api project will use these decorators as-is, but the web app will use the noop ones
//this is controlled in the web's project.json file (fileReplacements)
export { ApiProperty } from '@nestjs/swagger';
export { Expose } from 'class-transformer';
