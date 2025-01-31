import * as migration_20250129_091928_optional_name_her from './20250129_091928_optional_name_her';
import * as migration_20250131_055642_optional_name_here from './20250131_055642_optional_name_here';
import * as migration_20250131_060734_added_steps from './20250131_060734_added_steps';

export const migrations = [
  {
    up: migration_20250129_091928_optional_name_her.up,
    down: migration_20250129_091928_optional_name_her.down,
    name: '20250129_091928_optional_name_her',
  },
  {
    up: migration_20250131_055642_optional_name_here.up,
    down: migration_20250131_055642_optional_name_here.down,
    name: '20250131_055642_optional_name_here',
  },
  {
    up: migration_20250131_060734_added_steps.up,
    down: migration_20250131_060734_added_steps.down,
    name: '20250131_060734_added_steps'
  },
];
