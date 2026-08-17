import { readFileSync } from 'node:fs';
import { join } from 'node:path';

import {
  createFileRegistry,
  fromBinary,
  type FileRegistry,
} from '@bufbuild/protobuf';

import { FileDescriptorSetSchema } from '@bufbuild/protobuf/wkt';

let registry: FileRegistry | undefined;

export function getDescriptorRegistry(): FileRegistry {
  if (!registry) {
    const contractsPath = require
      .resolve('@ecommerce/contracts/package.json')
      .replace('/package.json', '');

    const descriptorPath = join(
      contractsPath,
      'descriptor.binpb',
    );

    const bytes = readFileSync(descriptorPath);

    const fileDescriptorSet = fromBinary(
      FileDescriptorSetSchema,
      bytes,
    );

    registry = createFileRegistry(fileDescriptorSet);
  }

  return registry;
}
