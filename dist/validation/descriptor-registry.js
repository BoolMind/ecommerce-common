"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDescriptorRegistry = getDescriptorRegistry;
const node_fs_1 = require("node:fs");
const node_path_1 = require("node:path");
const protobuf_1 = require("@bufbuild/protobuf");
const wkt_1 = require("@bufbuild/protobuf/wkt");
let registry;
function getDescriptorRegistry() {
    if (!registry) {
        const contractsPath = require
            .resolve('@ecommerce/contracts/package.json')
            .replace('/package.json', '');
        const descriptorPath = (0, node_path_1.join)(contractsPath, 'descriptor.binpb');
        const bytes = (0, node_fs_1.readFileSync)(descriptorPath);
        const fileDescriptorSet = (0, protobuf_1.fromBinary)(wkt_1.FileDescriptorSetSchema, bytes);
        registry = (0, protobuf_1.createFileRegistry)(fileDescriptorSet);
    }
    return registry;
}
//# sourceMappingURL=descriptor-registry.js.map