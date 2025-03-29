# Salamander's Premades

A collection of utility scripts for D&D 5e system in Foundry VTT v12.

## Description

This module enhances D&D 5e gameplay in Foundry VTT with several quality-of-life features. Each feature can be individually enabled or disabled through the module settings.

## Features

### Actor Image Quick View
- Right-click on actor links in journal entries to instantly show and share their portrait with players
- Streamlines token art presentation during gameplay

### Audio Controls Enhancement
- Right-click on playlist sound links to quickly play/stop audio
- Automatically stops other playing sounds when starting a new one
- Works in chat messages and journal entries

### Golden Dragon Armor Integration
- Special integration for the "Living Golden Dragon Armor" item
- After a long rest, provides choice between:
  - Spending half of available Hit Dice
  - Taking a level of exhaustion
- Includes automatic hit dice tracking and exhaustion management

### Enhanced Death State
- Automatically applies appropriate status effects when creatures reach 0 HP
- Uses "Incapacitated" status for player characters
- Uses "Dead" status for non-player creatures
- Automatically removes these statuses when HP is restored

## Requirements

- Foundry VTT v12
- D&D 5e System v4.3.1 or higher

## Installation

1. In Foundry VTT, navigate to the "Add-on Modules" tab
2. Click "Install Module" and enter the following manifest URL:
```
https://raw.githubusercontent.com/stalker168/salamanders-premades/main/module.json
```
3. Enable the module in your World's Module Settings