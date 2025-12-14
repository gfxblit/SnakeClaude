# Game Design Document: Laserbyte 

**Date:** October 26, 2023
**Genre:** Arcade / Casual / Twitch Reaction
**Perspective:** 2D Top-Down
**Theme:** Retro-futuristic Cyberspace / Neon Laser

## 1\. Executive Summary

**Laserbyte** is a high-energy variation of Snake featuring a challenging **relative input** scheme. The player controls a rogue light-emitter. Unlike traditional Snake, inputs are relative to the snake's current heading (turn left vs. turn right), rather than absolute screen directions. The game features a viewport-filling arena that scales to different devices, mandatory speed ramping for intense \~2-minute sessions, and a striking neon aesthetic.

## 2\. Game Flow Loop & Visual Mocks

**(Note on Mocks: ASCII representations below. Final style: glowing neon lines on deep black.)**

### STAGE 1: Main Menu (Intro Screen)

  * **Goal:** Attract player and clearly explain the complex relative input scheme.

**DESIGN MOCKUP - STAGE 1 (Intro)**

```text
+---------------------------------------+
|                                       |
|           [ L A S E R B Y T E ]       |
|              (Glowing Text)           |
|                                       |
|   [WARNING: RELATIVE STEERING ACTIVE] |
|                                       |
|       >>> TAP SIDES TO BEGIN <<<      |
|                                       |
|  [HOW TO STEER]                       |
|  IF MOVING UP:   Tap Left -> Go Left  |
|  IF MOVING DOWN: Tap Left -> Go Right |
|  (Inputs are relative to snake head!) |
|                                       |
|  CONTROLS:                            |
|  KEYBOARD: [Left Arrow] / [Right Arrow]|
|  TOUCH:    Tap Left Half / Right Half |
|                                       |
|  HIGH SCORE: 0450                     |
+---------------------------------------+
```

⬇️ *(Transition: Instant cut to gameplay arena)*

### STAGE 2: Gameplay

  * **Goal:** Survive and grow using relative turning. The arena fills the available screen space.

**DESIGN MOCKUP - STAGE 2 (Gameplay - Portrait view)**
*(Note: The HUD overlays slightly to maximize play area)*

```text
[DATA: 30] [TOP: 450] ------------------+
|#                                     #|
|#       * #|
|#                                     #|
|#             O                       #|
|#             |                       #|
|#             |                       #|
|#             |                       #|
|#             =======                 #|
|#                                     #|
|#                                     #|
|#                                     #|
|#                                     #|
|#                                     #|
+---------------------------------------+
```

⬇️ *(Transition: Screen freezes. Brief "glitch." Summary overlay slides in.)*

### STAGE 3: Game Over (Summary Screen)

  * **Goal:** Report performance and encourage replay.

**DESIGN MOCKUP - STAGE 3 (Summary Overlay)**
*(Background is dimmed Stage 2 state)*

```text
[DATA: 120] [TOP: 450] -----------------+
|#              [ GAME OVER ]          #|
|#                                     #|
|#             O                       #|
|#             | <---[CRASH!]          #|
|#                                     #|
|#          FINAL SCORE: 0120          #|
|#                                     #|
|#    [ TAP ANYWHERE TO REBOOT ]       #|
+---------------------------------------+
```

⬇️ *(Action: Tap loops back to Stage 1)*

## 3\. Gameplay Mechanics & Arena Scaling

### 3.1 The Core Loop (Relative Movement)

1.  The Light Emitter moves forward automatically at a constant speed.
2.  **Relative Input:** The player inputs a "Turn Left" or "Turn Right" command.
      * *Example:* If moving NORTH, "Turn Left" heads WEST.
      * *Example:* If moving SOUTH, "Turn Left" heads EAST.
3.  Navigate to collide with "Data Nodes."
4.  **Eating a Node:** Score +10, trail grows, Node respawns, *Speed Ramping check occurs*.
5.  Loop continues until death (Wall or Self collision).

### 3.2 Arena Size and Resolution Strategy

**Default: Portrait 1080 x 1920**

The game is designed for portrait orientation with a base resolution of **1080 x 1920 pixels**.

  * **Portrait Mode:** Arena fills the viewport.
  * **Landscape Mode:** Add decorative neon borders or black bars on the sides to maintain the portrait aspect ratio. The playable arena remains centered and does not stretch.

### 3.3 Required Speed Ramping

(Unchanged from v1.1)

  * **Trigger:** Every 5 Nodes consumed.
  * **Effect:** Speed increases by roughly 4%.

## 4\. Controls & Input Feedback (Revised for Relative Input)

Because inputs are relative, 4-directional inputs (WASD/Arrows/4-way Swipe) are confusing and redundant. We simplify to 2-directional input.

### 4.1 Input Mechanisms

  * **Scheme A: Keyboard (Desktop/Web):**
      * **Left Arrow** (or A key): Turn 90 degrees Left relative to current heading.
      * **Right Arrow** (or D key): Turn 90 degrees Right relative to current heading.
  * **Scheme B: Touch (One-Handed Swipe):**
      * **Swipe Left:** Turn 90 degrees Left relative to current heading.
      * **Swipe Right:** Turn 90 degrees Right relative to current heading.
      * *(Note: Swipe can be performed anywhere on screen, enabling one-handed play).*

### 4.2 UI Touch Feedback (Required)

Visual confirmation of swipe direction.

  * **Effect:** When a swipe is detected, a brief neon arrow or directional indicator appears at the swipe location, showing the swipe direction (left or right). The indicator fades out quickly (e.g., 100ms duration).

## 5\. User Interface (HUD)

To accommodate the "arena equals viewport" rule, the HUD must overlay the playfield unobtrusively.

  * **Style:** Transparent text with glowing edges, positioned at the very top edge of the grid.
  * **Content:** [SCORE] on the left, [HIGH SCORE] on the right.

## 6\. Simple Audio
  * **Music:** Single driving synthwave loop.
  * **SFX:** Node pickup chime, Death crash. No turning sound.