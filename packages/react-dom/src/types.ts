import type {
  ComputePositionConfig,
  ComputePositionReturn,
  VirtualElement,
} from '@floating-ui/dom';
import * as React from 'react';

export {arrow, Options as ArrowOptions} from './arrow';
export {useFloating} from './useFloating';
export type {
  AlignedPlacement,
  Alignment,
  AutoPlacementOptions,
  AutoUpdateOptions,
  Axis,
  Boundary,
  ClientRectObject,
  ComputePositionConfig,
  ComputePositionReturn,
  Coords,
  DetectOverflowOptions,
  Dimensions,
  ElementContext,
  ElementRects,
  Elements,
  FlipOptions,
  FloatingElement,
  HideOptions,
  InlineOptions,
  Length,
  Middleware,
  MiddlewareArguments,
  MiddlewareData,
  MiddlewareReturn,
  MiddlewareState,
  NodeScroll,
  OffsetOptions,
  Padding,
  Placement,
  Platform,
  Rect,
  ReferenceElement,
  RootBoundary,
  ShiftOptions,
  Side,
  SideObject,
  SizeOptions,
  Strategy,
  VirtualElement,
} from '@floating-ui/dom';
export {
  autoPlacement,
  autoUpdate,
  computePosition,
  detectOverflow,
  flip,
  getOverflowAncestors,
  hide,
  inline,
  limitShift,
  offset,
  platform,
  shift,
  size,
} from '@floating-ui/dom';

type Prettify<T> = {
  [K in keyof T]: T[K];
  // eslint-disable-next-line @typescript-eslint/ban-types
} & {};

export type UseFloatingData = Prettify<
  ComputePositionReturn & {isPositioned: boolean}
>;

export type ReferenceType = Element | VirtualElement;

export type UseFloatingReturn<RT extends ReferenceType = ReferenceType> =
  Prettify<
    UseFloatingData & {
      /**
       * Update the position of the floating element, re-rendering the component
       * if required.
       */
      update: () => void;
      floatingStyles: React.CSSProperties;
      refs: {
        reference: React.MutableRefObject<RT | null>;
        floating: React.MutableRefObject<HTMLElement | null>;
        setReference: (node: RT | null) => void;
        setFloating: (node: HTMLElement | null) => void;
      };
      elements: {
        reference: RT | null;
        floating: HTMLElement | null;
      };
    }
  >;

export type UseFloatingOptions<RT extends ReferenceType = ReferenceType> =
  Prettify<
    Partial<ComputePositionConfig> & {
      whileElementsMounted?: (
        reference: RT,
        floating: HTMLElement,
        update: () => void
      ) => () => void;
      elements?: {
        reference?: RT | null;
        floating?: HTMLElement | null;
      };
      open?: boolean;
      transform?: boolean;
    }
  >;
