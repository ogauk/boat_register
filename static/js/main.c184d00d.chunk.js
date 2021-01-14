(this.webpackJsonpboats = this.webpackJsonpboats || []).push([
  [0],
  {
    423: function (e, t, a) {},
    596: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        r = a(17),
        o = (a(367), a(0)),
        c = a.n(o),
        i = a(23),
        s = a.n(i);
      a(423),
        Boolean(
          "localhost" === window.location.hostname ||
            "[::1]" === window.location.hostname ||
            window.location.hostname.match(
              /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
            )
        );
      var C = a(689),
        l = a(182),
        b = a(322),
        d = a(342),
        j = a(341),
        u = a(652),
        h = new b.a({
          link: Object(d.a)({
            uri: "https://api-oga.herokuapp.com/v1/graphql",
          }),
          cache: new j.a(),
        });
      function g(e) {
        var t = e.children;
        return Object(n.jsx)(u.ApolloProvider, { client: h, children: t });
      }
      function p(e) {
        var t = e.className,
          a = e.to,
          r = e.children;
        return (
          console.log("Link", a),
          Object(n.jsx)("a", { className: t, href: a, children: r })
        );
      }
      var f = a(13),
        O = a(184),
        m = a(54),
        x = a(670),
        v = a(139),
        y = a(669),
        _ = a(109),
        M = a(660),
        w = a(269),
        L = a(273),
        Z = a(270),
        S = a(661),
        k = a(271),
        B = a(662),
        P = a(318),
        F = a(657),
        N = a(658),
        T = a(690),
        I = a(693),
        R = a(659),
        D = a(688);
      function H(e) {
        var t = e.options,
          a = e.id,
          c = e.label,
          i = e.onChange,
          s = e.value,
          C = e.clearable,
          l = void 0 === C || C,
          b = Object(o.useState)(s || ""),
          d = Object(r.a)(b, 2),
          j = d[0],
          u = d[1],
          h = t.map(function (e) {
            return e.name;
          });
        return (
          h.push(""),
          Object(n.jsx)(D.a, {
            disableClearable: !l,
            options: h,
            id: a,
            value: j,
            onChange: function (e, t) {
              u(t), i(a, "" === t ? void 0 : t);
            },
            renderInput: function (e) {
              return Object(n.jsx)(
                P.a,
                Object(f.a)(
                  Object(f.a)({}, e),
                  {},
                  { label: c, margin: "normal", variant: "outlined" }
                )
              );
            },
          })
        );
      }
      for (var z = { asc: "desc", desc: "asc" }, G = [], $ = 1; $ <= 8; $++)
        G.push({ name: "".concat(6 * $) });
      var W = Object(Z.a)(function (e) {
        return {
          root: {
            "& .MuiTextField-root": { margin: e.spacing(1), width: 200 },
          },
        };
      });
      function Y(e) {
        var t = e.sortDirection,
          a = e.sortField,
          r = e.boatsPerPage,
          o = e.filters,
          c = e.pickers,
          i = e.onFilterChange,
          s = e.onPageSizeChange,
          C = e.onSortChange,
          l = W();
        function b(e, t) {
          if ((console.log("picker change", e, t), t))
            i(Object(f.a)(Object(f.a)({}, o), {}, Object(m.a)({}, e, t)));
          else {
            var a = Object(f.a)({}, o);
            delete a[e], i(a);
          }
        }
        function d(e) {
          var t = e.target,
            a = t.id,
            n = t.value,
            r = Object(f.a)({}, o.year);
          if (4 === n.length)
            (r[a] = parseInt(n)),
              i(Object(f.a)(Object(f.a)({}, o), {}, { year: r }));
          else if ("" === n)
            if ((delete r[a], 0 === Object.keys(r).length)) {
              var c = Object(f.a)({}, o);
              delete c.year, i(c);
            } else i(Object(f.a)(Object(f.a)({}, o), {}, { year: r }));
          else console.log("unchanged", r);
        }
        var j = [
          { field: "name", name: "Name", direction: "asc" },
          { field: "oga_no", name: "OGA No.", direction: "asc" },
          { field: "year", name: "Age", direction: "asc" },
          { field: "updated_at", name: "Updated", direction: "desc" },
          {
            field: "editors_choice",
            name: "Editor's choice",
            direction: "asc",
          },
        ];
        o.sale && j.push({ field: "price", name: "Price", direction: "desc" });
        var u = j.reduce(function (e, t) {
            var a = t.field,
              n = t.name;
            return (e[a] = n), e;
          }, {}),
          h = j.reduce(function (e, t) {
            var a = t.field,
              n = t.direction;
            return (e[a] = n), e;
          }, {});
        var g = {
          min: "1800",
          max: "".concat(new Date().getFullYear() + 1),
          step: "10",
        };
        return Object(n.jsxs)("form", {
          className: l.root,
          children: [
            Object(n.jsx)("p", {}),
            Object(n.jsx)(M.a, {}),
            Object(n.jsx)(R.a, {
              children:
                "Use these controls to sort the list by name, price, etc. and to choose how much you want to see",
            }),
            Object(n.jsxs)(k.a, {
              container: !0,
              direction: "row",
              children: [
                Object(n.jsx)(H, {
                  clearable: !1,
                  value: r,
                  id: "page-size",
                  onChange: function (e, t) {
                    console.log("handlePageSizeChange", t), s(t);
                  },
                  options: G,
                  label: "Boats Per Page",
                }),
                Object(n.jsxs)(F.a, {
                  children: [
                    Object(n.jsx)(N.a, { children: "Sort By" }),
                    Object(n.jsx)(I.a, {
                      row: !0,
                      "aria-label": "sorting",
                      name: "sorting",
                      value: u[a],
                      onChange: function (e) {
                        var t = e.target.value;
                        if (t !== a) {
                          var n = h[t];
                          C(t, n);
                        }
                      },
                      children: j.map(function (e) {
                        return Object(n.jsx)(
                          S.a,
                          {
                            value: e.field,
                            control: Object(n.jsx)(T.a, {
                              checked: a === e.field,
                            }),
                            label: e.name,
                          },
                          e.name
                        );
                      }),
                    }),
                  ],
                }),
                Object(n.jsx)(S.a, {
                  id: "sort-direction",
                  onChange: function (e) {
                    var n = h[a],
                      r = e.target.checked ? z[n] : n;
                    r !== t && C(a, r);
                  },
                  control: Object(n.jsx)(B.a, { checked: t !== h[a] }),
                  label: "reversed",
                }),
              ],
            }),
            Object(n.jsx)(M.a, {}),
            Object(n.jsx)(R.a, {
              children:
                "Use these controls to filter the list in one or more ways",
            }),
            Object(n.jsxs)(k.a, {
              container: !0,
              direction: "row",
              justify: "space-between",
              alignItems: "stretch",
              children: [
                Object(n.jsx)(H, {
                  onChange: b,
                  id: "name",
                  options: c.boatNames,
                  label: "Boat Name",
                  value: o.name,
                }),
                Object(n.jsx)(P.a, {
                  onChange: function (e) {
                    i(
                      Object(f.a)(
                        Object(f.a)({}, o),
                        {},
                        { oga_no: e.target.value }
                      )
                    );
                  },
                  id: "oga_no",
                  label: "OGA Boat No.",
                  variant: "outlined",
                  value: o.oga_no,
                }),
                Object(n.jsx)(H, {
                  onChange: b,
                  id: "designer",
                  options: c.designer,
                  label: "Designer",
                  value: o.designer,
                }),
                Object(n.jsx)(H, {
                  onChange: b,
                  id: "builder",
                  options: c.builder,
                  label: "Builder",
                  value: o.builder,
                }),
                Object(n.jsx)(P.a, {
                  onChange: d,
                  id: "firstYear",
                  label: "Built After",
                  variant: "outlined",
                  type: "number",
                  inputProps: g,
                  value: o.year ? o.year.firstYear : "",
                }),
                Object(n.jsx)(P.a, {
                  onChange: d,
                  id: "lastYear",
                  label: "Built Before",
                  variant: "outlined",
                  type: "number",
                  inputProps: g,
                  value: o.year ? o.year.lastYear : "",
                }),
                Object(n.jsx)(H, {
                  onChange: b,
                  id: "rig_type",
                  options: c.rig_type,
                  label: "Rig Type",
                  value: o.rig_type,
                }),
                Object(n.jsx)(H, {
                  onChange: b,
                  id: "mainsail_type",
                  options: c.sail_type,
                  label: "Mainsail Type",
                  value: o.mainsail_type,
                }),
                Object(n.jsx)(H, {
                  onChange: b,
                  id: "generic_type",
                  options: c.generic_type,
                  label: "Generic Type",
                  value: o.generic_type,
                }),
                Object(n.jsx)(H, {
                  onChange: b,
                  id: "design_class",
                  options: c.design_class,
                  label: "Design Class",
                  value: o.design_class,
                }),
                Object(n.jsx)(H, {
                  onChange: b,
                  id: "construction_material",
                  options: c.construction_material,
                  label: "Construction Material",
                  value: o.construction_material,
                }),
              ],
            }),
          ],
        });
      }
      var q = a(686),
        A = a(66),
        E = a.n(A);
      function U(e) {
        if (!e) return { _and: !0 };
        var t = [];
        return (
          e.year &&
            (t.push({ year: { _gte: e.year.firstYear } }),
            t.push({ year: { _lte: e.year.lastYear } })),
          e.oga_no && t.push({ oga_no: { _eq: e.oga_no } }),
          e.name &&
            t.push({
              _or: [
                { name: { _ilike: "%".concat(e.name, "%") } },
                { previous_names: { _contains: e.name } },
              ],
            }),
          e.designer &&
            t.push({ designerByDesigner: { name: { _eq: e.designer } } }),
          e.builder &&
            t.push({ builderByBuilder: { name: { _eq: e.builder } } }),
          e.rig_type &&
            t.push({ rigTypeByRigType: { name: { _eq: e.rig_type } } }),
          e.mainsail_type &&
            t.push({ mainsail_type: { _eq: e.mainsail_type } }),
          e.generic_type &&
            t.push({
              genericTypeByGenericType: { name: { _eq: e.generic_type } },
            }),
          e.design_class &&
            t.push({
              designClassByDesignClass: { name: { _eq: e.design_class } },
            }),
          e.construction_material &&
            t.push({
              constructionMaterialByConstructionMaterial: {
                name: { _eq: e.construction_material },
              },
            }),
          e.sale && t.push({ for_sale_state: { text: { _eq: "for_sale" } } }),
          { _and: t }
        );
      }
      var J = a(663);
      var V = a(183),
        K = Object(Z.a)(function (e) {
          return {
            ul: { listStyle: "none", padding: 0, margin: 0, display: "flex" },
            buttonSelected: { fontWeight: "bold" },
          };
        });
      function Q(e) {
        var t = e.items,
          a = K();
        return Object(n.jsx)("nav", {
          children: Object(n.jsx)("ul", {
            className: a.ul,
            children: t.map(function (e, t) {
              var r = e.page,
                o = e.type,
                c = e.selected,
                i = Object(V.a)(e, ["page", "type", "selected"]),
                s = null;
              switch (o) {
                case "other-ellipsis":
                case "start-ellipsis":
                case "end-ellipsis":
                  s = "\u2026";
                  break;
                case "page":
                  s = Object(n.jsx)(
                    "button",
                    Object(f.a)(
                      Object(f.a)({ type: "button" }, i),
                      {},
                      { className: c ? a.buttonSelected : void 0, children: r }
                    )
                  );
                  break;
                case "fast-forward":
                case "fast-rewind":
                  break;
                default:
                  s = Object(n.jsx)(
                    "button",
                    Object(f.a)(
                      Object(f.a)({ type: "button" }, i),
                      {},
                      { children: o }
                    )
                  );
              }
              return Object(n.jsx)("li", { children: s }, t);
            }),
          }),
        });
      }
      var X = a(272),
        ee = a(665),
        te = a(668),
        ae = a(667),
        ne = a(666),
        re = a(664);
      function oe(e) {
        var t = e.fields,
          a = e.data,
          r = [];
        return (
          Object.keys(t).forEach(function (e) {
            var n = t[e].access(a[e]);
            n && r.push({ key: e, label: t[e].label, text: n });
          }),
          Object(n.jsx)("div", {
            children: r.map(function (e) {
              return Object(n.jsx)(
                _.a,
                { children: "".concat(e.label, ": ").concat(e.text) },
                e.key
              );
            }),
          })
        );
      }
      var ce = new Intl.NumberFormat("en-GB", {
        currency: "GBP",
        style: "currency",
      });
      var ie = {
          home: function (e) {
            return Object(f.a)(Object(f.a)({}, e), {}, { pathname: "/" });
          },
          boatLink: function (e, t) {
            return { pathname: "/boat/".concat(t), state: e };
          },
          boatUrl: function (e) {
            return "https://www.oga.org.uk/boat_register/browse_the_register/boat.html?oga_no=".concat(
              e
            );
          },
        },
        se = a(331),
        Ce = "/boat_register",
        le = "".concat(Ce, "/browse_the_register"),
        be = "".concat(Ce, "/boats_for_sale");
      function de(e) {
        return e.href.includes("test") ? "test_" : "";
      }
      var je = {
        home: function (e) {
          var t = new URLSearchParams(e.search),
            a = "true" === t.get("sale"),
            n = a ? be : le,
            r = a ? "boats_for_sale" : "browse_the_register",
            o = "".concat(de(e)).concat(r, ".html"),
            c = "".concat(n, "/").concat(o);
          t.delete("sale"), t.delete("oga_no");
          var i = t.toString();
          return (
            i.length > 0 && (c = "".concat(c, "?").concat(i)),
            console.log("home", { home: c, path: n, doc: o, qp: i }),
            c
          );
        },
        boatLink: function (e, t, a) {
          var n;
          if (e) {
            var r = e.filters,
              o = e.page,
              c = e.boatsPerPage,
              i = e.sortField,
              s = e.sortDirection;
            n = "&p="
              .concat(o, "&bpp=")
              .concat(c, "&sort=")
              .concat(i, "&asc=")
              .concat("asc" === s);
            for (var C = 0, l = Object.keys(r); C < l.length; C++) {
              var b = l[C];
              if (b)
                if ("year" === b) {
                  var d = r.year.firstYear || "",
                    j = r.year.lastYear || "";
                  n = "".concat(n, "&y=").concat(d, "-").concat(j);
                } else n = "".concat(n, "&").concat(b, "=").concat(r[b]);
            }
          } else n = "";
          return ""
            .concat(le, "/")
            .concat(de(a), "boat.html?oga_no=")
            .concat(t)
            .concat(n);
        },
        getState: function (e, t) {
          var a = Object(f.a)({}, e);
          if (t && "" !== t) {
            var n,
              o = new URLSearchParams(t),
              c = Object(se.a)(o);
            try {
              for (c.s(); !(n = c.n()).done; ) {
                var i = Object(r.a)(n.value, 2),
                  s = i[0],
                  C = i[1];
                switch (s) {
                  case "p":
                    a.page = parseInt(C, 10);
                    break;
                  case "bpp":
                    a.boatsPerPage = C;
                    break;
                  case "sort":
                    a.sortField = C;
                    break;
                  case "asc":
                    a.sortDirection = "true" === C ? "asc" : "desc";
                    break;
                  case "y":
                    var l = {},
                      b = C.split("-"),
                      d = Object(r.a)(b, 2),
                      j = d[0],
                      u = d[1];
                    "" !== j && (l.firstYear = j),
                      "" !== u && (l.lastYear = u),
                      (a.filters.year = l);
                    break;
                  default:
                    a.filters[s] = C;
                }
              }
            } catch (h) {
              c.e(h);
            } finally {
              c.f();
            }
          }
          return a;
        },
        boatUrl: function (e, t) {
          var a = t.origin,
            n = t.pathname;
          return "".concat(a).concat(n, "?oga_no=").concat(e);
        },
      };
      function ue(e) {
        return e.href ? je.home(e) : ie.home(e);
      }
      function he(e, t, a) {
        return a.href ? je.boatLink(e, t, a) : ie.boatLink(e, t);
      }
      function ge(e) {
        if (e)
          return (function (e) {
            return 0 === e ? "offers" : ce.format(e);
          })(e);
      }
      var pe = {
        year: {
          label: "Year Built",
          access: function (e) {
            return e;
          },
        },
        place_built: {
          label: "Place Built",
          access: function (e) {
            return e;
          },
        },
        home_port: {
          label: "Home Port",
          access: function (e) {
            return e;
          },
        },
        rigType: {
          label: "Rig Type",
          access: function (e) {
            return e;
          },
        },
        designerByDesigner: {
          label: "Designer",
          access: function (e) {
            return e ? e.name : e;
          },
        },
        builderByBuilder: {
          label: "Builder",
          access: function (e) {
            return e ? e.name : e;
          },
        },
        previous_names: {
          label: "Was",
          access: function (e) {
            return (function (e) {
              if (e && e.length > 0)
                try {
                  return e.join(", ");
                } catch (t) {
                  console.log(t);
                }
            })(e);
          },
        },
        price: {
          label: "Price",
          access: function (e) {
            return ge(e);
          },
        },
      };
      function fe(e) {
        var t = e.boat,
          a = e.invisible,
          r = e.children;
        if (!t.thumb) return r;
        if (!t.for_sale_state) return r;
        switch (t.for_sale_state.text) {
          case "for_sale":
            return Object(n.jsx)(re.a, {
              invisible: a,
              badgeContent: "For sale",
              color: "secondary",
              children: r,
            });
          case "sold":
            return Object(n.jsx)(re.a, {
              badgeContent: "Sold",
              color: "primary",
              children: r,
            });
          default:
            return r;
        }
      }
      var Oe = Object(Z.a)(function (e) {
        return {
          icon: { marginRight: e.spacing(2) },
          card: { height: "100%", display: "flex", flexDirection: "column" },
          cardMedia: { paddingTop: "100%" },
          cardMediaSmall: { paddingTop: "56.25%" },
          cardContent: { flexGrow: 1 },
          footer: {
            backgroundColor: e.palette.background.paper,
            padding: e.spacing(6),
          },
        };
      });
      function me(e) {
        if (e && e.short_description) {
          var t = e.short_description.trim();
          return t.startsWith("<") ? t : "<div>".concat(t, "</div>");
        }
        return "";
      }
      function xe() {
        return "";
      }
      function ve(e) {
        var t = e.state,
          a = e.boat,
          r = e.link,
          o = e.location,
          c = Oe(),
          i = t.filters.sale;
        return Object(n.jsxs)(ee.a, {
          className: a.thumb ? c.card : c.cardSmall,
          children: [
            a.thumb
              ? Object(n.jsx)(ne.a, {
                  className: c.cardMedia,
                  image: a.thumb,
                  title: a.name,
                })
              : Object(n.jsx)(xe, {}),
            Object(n.jsxs)(ae.a, {
              className: c.cardContent,
              children: [
                Object(n.jsx)(_.a, {
                  gutterBottom: !0,
                  variant: "h5",
                  component: "h2",
                  children: Object(n.jsxs)(fe, {
                    invisible: i,
                    boat: a,
                    children: [a.name, " (", a.oga_no, ")"],
                  }),
                }),
                Object(n.jsx)(_.a, {
                  variant: "body2",
                  dangerouslySetInnerHTML: { __html: me(a) },
                }),
                Object(n.jsx)(oe, { fields: pe, data: a }),
              ],
            }),
            Object(n.jsx)(te.a, {
              children: Object(n.jsx)(X.a, {
                size: "small",
                component: r,
                to: he(t, a.oga_no, o),
                variant: "contained",
                color: "secondary",
                children: "More..",
              }),
            }),
          ],
        });
      }
      var ye = Object(Z.a)(function (e) {
        return {
          CenterItem: { margin: "auto" },
          cardGrid: { paddingTop: e.spacing(8), paddingBottom: e.spacing(8) },
        };
      });
      function _e(e) {
        var t = e.state,
          a = e.onChangePage,
          r = e.link,
          o = e.location,
          c = t.filters,
          i = t.page,
          s = t.boatsPerPage,
          C = t.sortField,
          l = t.sortDirection,
          b = ye(),
          d = parseInt(s),
          j = Object(u.useQuery)(
            (function (e) {
              var t = "\n  query boats($where: boat_bool_exp!, $limit: Int!, $offset: Int!) {\n      boat_aggregate(where: $where) { aggregate { totalCount: count } }\n      boat(limit: $limit, offset: $offset, order_by: ".concat(
                e,
                ", where: $where) {\n        name oga_no\n        place_built previous_names home_port\n        short_description year\n        builderByBuilder{name}\n        designerByDesigner{name}\n        design_class\n        thumb image_key\n        price\n        for_sale_state { text }\n      }\n    }"
              );
              return E()(t);
            })("{".concat(C, ": ").concat(l, "}")),
            { variables: { limit: d, offset: d * (i - 1), where: U(c) } }
          ),
          h = j.loading,
          g = j.error,
          p = j.data;
        g && console.log(JSON.stringify(g));
        var f = p ? p.boat_aggregate.aggregate.totalCount : 0,
          O = Math.ceil(f / s),
          m = (function (e, t, a) {
            var n = Object(J.a)({ count: e, page: t, onChange: a }).items,
              r = n.findIndex(function (e) {
                return "start-ellipsis" === e.type;
              });
            if (r >= 0) {
              var o = Math.floor(n[r + 1].page / 2);
              n.splice(
                r,
                0,
                {
                  disabled: !1,
                  onClick: void 0,
                  page: null,
                  selected: !1,
                  type: "other-ellipsis",
                },
                {
                  disabled: !1,
                  onClick: function (e) {
                    return a(e, o);
                  },
                  page: o,
                  selected: !1,
                  type: "page",
                }
              );
            }
            var c = n.findIndex(function (e) {
              return "end-ellipsis" === e.type;
            });
            if (c >= 0) {
              var i = n[c - 1].page + Math.floor((e - n[c - 1].page) / 2);
              n.splice(
                c + 1,
                0,
                {
                  disabled: !1,
                  onClick: function (e) {
                    return a(e, i);
                  },
                  page: i,
                  selected: !1,
                  type: "page",
                },
                {
                  disabled: !1,
                  onClick: void 0,
                  page: null,
                  selected: !1,
                  type: "other-ellipsis",
                }
              );
            }
            return n;
          })(O, i, function (e, t) {
            a({ selectedBoats: f, pages: O, page: t });
          });
        if (g) return Object(n.jsx)("p", { children: "Error: (BoatCards)" });
        if (h) {
          if (!p) return Object(n.jsx)("p", { children: "Loading..." });
          console.log("Loading set but data here");
        }
        if (f > 0)
          return Object(n.jsxs)(y.a, {
            className: b.cardGrid,
            maxWidth: "md",
            children: [
              Object(n.jsx)(Q, { items: m }),
              Object(n.jsx)(q.a, { py: 1 }),
              Object(n.jsx)(k.a, {
                container: !0,
                spacing: 4,
                children: p.boat.map(function (e) {
                  return Object(n.jsx)(
                    k.a,
                    {
                      item: !0,
                      xs: 12,
                      sm: 6,
                      md: 4,
                      children: Object(n.jsx)(ve, {
                        state: t,
                        boat: e,
                        link: r,
                        location: o,
                      }),
                    },
                    e.oga_no
                  );
                }),
              }),
              Object(n.jsx)(q.a, { py: 1 }),
              Object(n.jsx)(Q, { items: m }),
            ],
          });
        var x,
          v = c.rig_type,
          M = c.construction_material,
          w = c.generic_type,
          L = c.design_class,
          Z = c.year,
          S = c.sale,
          B = c.mainsail_type,
          P = c.designer,
          F = c.builder,
          N = c.oga_no,
          T = c.name;
        if (N)
          x = "The boat numbered ".concat(
            N,
            " doesn't match the filters you have set"
          );
        else {
          if (
            ((x = "There are no"),
            v && (x = "".concat(x, " ").concat(v, " rigged")),
            (x = L
              ? "".concat(x, " ").concat(L, "'s")
              : w
              ? "".concat(x, " ").concat(w, "'s")
              : "".concat(x, " boats")),
            B && (x = "".concat(x, " with a ").concat(B, " main")),
            P && (x = "".concat(x, " by this designer")),
            F && (x = "".concat(x, " by this builder")),
            Z)
          ) {
            var I = Z.firstYear,
              R = Z.lastYear;
            I && R
              ? (x = ""
                  .concat(x, " built between ")
                  .concat(I, " and ")
                  .concat(R))
              : I
              ? (x = "".concat(x, " built after ").concat(I))
              : R && (x = "".concat(x, " built before ").concat(R));
          }
          M && (x = "".concat(x, " built of ").concat(M)),
            S && (x = "".concat(x, " for sale.")),
            (x = "".concat(x, " on the register")),
            T && (x = "".concat(x, " which have ever been called ").concat(T));
        }
        return Object(n.jsxs)(k.a, {
          container: !0,
          alignItems: "stretch",
          children: [
            Object(n.jsx)(k.a, { xs: 2 }),
            Object(n.jsxs)(k.a, {
              children: [
                Object(n.jsxs)(_.a, { variant: "h6", children: [x, "."] }),
                Object(n.jsx)(_.a, {
                  variant: "h6",
                  children: "Try removing some filters.",
                }),
              ],
            }),
            Object(n.jsx)(k.a, { xs: 2 }),
          ],
        });
      }
      function Me() {
        return Object(n.jsxs)(n.Fragment, {
          children: [
            Object(n.jsx)(_.a, {
              variant: "body1",
              children:
                "We have lots listed for sale! Filter the list using the options below, and then click the 'More' button to see all the pictures and information we have for that boat.",
            }),
            Object(n.jsx)(_.a, {
              variant: "body1",
              children:
                "Interested in a boat? Use the contact button on the boat's detail page and our editors will contact the owner for you.",
            }),
            Object(n.jsx)(_.a, {
              variant: "body1",
              children:
                "Members can use the register to advertise their boat for sale. The first step is to make sure the boat is on the register.",
            }),
          ],
        });
      }
      function we() {
        return Object(n.jsxs)(n.Fragment, {
          children: [
            Object(n.jsx)(_.a, {
              variant: "body1",
              children:
                "We have hundreds of boats with pictures, and many more waiting for pictures and more information.",
            }),
            Object(n.jsx)(_.a, {
              variant: "body1",
              children:
                "Filter the list using the options below, and then click the 'More' button to see all the pictures and information we have for that boat.",
            }),
            Object(n.jsxs)(_.a, {
              variant: "body1",
              children: [
                "Have a boat and can't find it here? Fill in our",
                " ",
                Object(n.jsx)("a", {
                  href: "https://form.jotform.com/jfbcable/new-boat",
                  children: "form",
                }),
                "\xa0and we will add it.",
              ],
            }),
            Object(n.jsx)(_.a, {
              variant: "body1",
              children:
                "You can also use the form to suggest a boat whether you own it or not.",
            }),
            Object(n.jsx)(_.a, {
              variant: "body1",
              children:
                "You can submit pictures, additions, and corrections to boats, or contact the owner from the boat's detail page.",
            }),
            Object(n.jsx)(_.a, {
              variant: "body1",
              children:
                "Members can use the register to advertise their boat for sale. The first step is to make sure the boat is on the register.",
            }),
          ],
        });
      }
      var Le = Object(Z.a)(function (e) {
        return {
          root: { display: "flex" },
          content: { flexGrow: 1, padding: e.spacing(3) },
          menuButton: Object(m.a)(
            { marginRight: e.spacing(2) },
            e.breakpoints.up("sm"),
            { display: "none" }
          ),
        };
      });
      function Ze(e) {
        return e.boatsForSale ? Object(n.jsx)(Me, {}) : Object(n.jsx)(we, {});
      }
      var Se = function (e) {
        var t = e.pickers,
          a = e.state,
          r = e.onPageChange,
          o = e.onPageSizeChange,
          c = e.onSortChange,
          i = e.onFilterChange,
          s = e.link,
          C = e.location,
          l = Le();
        t.boatNames = (function (e) {
          if (!e) return [];
          var t = e.map(function (e) {
              return e.name;
            }),
            a = e
              .map(function (e) {
                return e.previous_names;
              })
              .flat(),
            n = new Set([].concat(Object(O.a)(t), Object(O.a)(a))),
            r = Object(O.a)(n).filter(function (e) {
              return e;
            });
          return (
            r.sort(function (e, t) {
              return e.toLowerCase().localeCompare(t.toLowerCase());
            }),
            "" === r[0] && r.shift(),
            r.map(function (e) {
              return { name: e, __typename: "boat" };
            })
          );
        })(t.boat);
        var b = "_blank",
          d = a.boatsPerPage,
          j = a.sortField,
          u = a.sortDirection,
          h = a.filters;
        return Object(n.jsxs)("div", {
          className: l.root,
          children: [
            Object(n.jsx)(x.a, {}),
            Object(n.jsxs)(v.a, {
              children: [
                Object(n.jsxs)(y.a, {
                  children: [
                    Object(n.jsx)(Ze, { boatsForSale: h.sale }),
                    Object(n.jsx)(Y, {
                      sortField: j,
                      sortDirection: u,
                      boatsPerPage: d,
                      filters: h,
                      onPageSizeChange: o,
                      onSortChange: c,
                      onFilterChange: i,
                      pickers: t,
                    }),
                  ],
                }),
                Object(n.jsx)(M.a, {}),
                Object(n.jsx)(_e, {
                  state: a,
                  onChangePage: function (e) {
                    var t = e.selectedBoats,
                      a = e.pages,
                      n = e.page;
                    console.log("handlePageChange", t, a, n), r(n);
                  },
                  link: s,
                  location: C,
                }),
                Object(n.jsx)(M.a, {}),
                Object(n.jsx)(_.a, {
                  children: "Other great places to look for boats are:",
                }),
                Object(n.jsxs)(w.a, {
                  children: [
                    Object(n.jsx)(L.a, {
                      children: Object(n.jsx)(_.a, {
                        children: Object(n.jsx)("a", {
                          target: b,
                          href: "https://www.nationalhistoricships.org.uk",
                          children: "National Historic Ships",
                        }),
                      }),
                    }),
                    Object(n.jsx)(L.a, {
                      children: Object(n.jsxs)(_.a, {
                        children: [
                          Object(n.jsx)("a", {
                            target: b,
                            href: "https://nmmc.co.uk/explore/databases/",
                            children: "NMM Cornwall",
                          }),
                          "\xa0 maintain a number of interesting databases including small boats and yacht designs",
                        ],
                      }),
                    }),
                  ],
                }),
              ],
            }),
          ],
        });
      };
      function ke(e) {
        var t = e.title,
          a = e.defaultState,
          c = e.onPageSizeChange,
          i =
            void 0 === c
              ? function (e) {
                  return console.log("".concat(t, " page size change"), e);
                }
              : c,
          s = e.onSortChange,
          C =
            void 0 === s
              ? function (e, a) {
                  return console.log("".concat(t, " sortchange"), e, a);
                }
              : s,
          l = e.onFilterChange,
          b =
            void 0 === l
              ? function (e) {
                  return console.log("".concat(t, " filter change"), e);
                }
              : l,
          d = e.onPageChange,
          j =
            void 0 === d
              ? function (e) {
                  return console.log("".concat(t, " page change"), e);
                }
              : d,
          h = e.link,
          g = e.location,
          p = Object(u.useQuery)(
            E()(
              "{\n        boat{name previous_names}\n        designer(order_by: {name: asc}){name}\n        builder(order_by: {name: asc}){name}\n        rig_type(order_by: {name: asc}){name}\n        sail_type(order_by: {name: asc}){name}\n        design_class(order_by: {name: asc}){name}\n        generic_type(order_by: {name: asc}){name}\n        construction_material(order_by: {name: asc}){name}\n        construction_method(order_by: {name: asc}){name}\n        hull_form(order_by: {name: asc}){ name }\n        spar_material(order_by: {name: asc}){ name }\n    }"
            )
          ),
          O = p.loading,
          m = p.error,
          x = p.data,
          v = Object(o.useState)(a),
          y = Object(r.a)(v, 2),
          _ = y[0],
          M = y[1];
        if (O) return Object(n.jsx)("p", { children: "Loading..." });
        if (m) return Object(n.jsxs)("p", { children: ["Error :(", t, ")"] });
        return Object(n.jsx)(Se, {
          pickers: x,
          state: _,
          onPageChange: function (e) {
            j(e), M(Object(f.a)(Object(f.a)({}, _), {}, { page: e }));
          },
          onPageSizeChange: function (e) {
            i(e), M(Object(f.a)(Object(f.a)({}, _), {}, { boatsPerPage: e }));
          },
          onSortChange: function (e, t) {
            C(e, t),
              M(
                Object(f.a)(
                  Object(f.a)({}, _),
                  {},
                  { sortField: e, sortDirection: t }
                )
              );
          },
          onFilterChange: function (e) {
            b(e),
              M(Object(f.a)(Object(f.a)({}, _), {}, { filters: e, page: 1 }));
          },
          link: h,
          location: g,
        });
      }
      var Be = a(5),
        Pe = a(62),
        Fe = a(332),
        Ne = a.n(Fe);
      function Te(e) {
        var t = e.children,
          a = e.value,
          r = e.index,
          o = Object(V.a)(e, ["children", "value", "index"]);
        return Object(n.jsx)(
          "div",
          Object(f.a)(
            Object(f.a)(
              {
                role: "tabpanel",
                hidden: a !== r,
                id: "full-width-tabpanel-".concat(r),
                "aria-labelledby": "full-width-tab-".concat(r),
              },
              o
            ),
            {},
            {
              children:
                a === r &&
                Object(n.jsx)(q.a, {
                  p: 3,
                  className: "MuiTypography-body1",
                  children: t,
                }),
            }
          )
        );
      }
      function Ie(e) {
        var t = e.label,
          a = e.value;
        if (a) {
          var r = Array.isArray(a) ? a.join(", ") : a;
          if ((r.name && (r = r.name), "" !== r && "null" !== r))
            return Object(n.jsxs)("div", {
              children: [
                Object(n.jsxs)(_.a, {
                  variant: "subtitle2",
                  component: "span",
                  children: [t, ": "],
                }),
                Object(n.jsx)(_.a, {
                  variant: "body1",
                  component: "span",
                  children: r,
                }),
              ],
            });
        }
        return "";
      }
      var Re = a(672),
        De = a(676),
        He = a(675),
        ze = a(671),
        Ge = a(673),
        $e = a(674);
      function We(e) {
        var t = e.rows,
          a = e.classes;
        return Object(n.jsx)(ze.a, {
          component: v.a,
          children: Object(n.jsxs)(Re.a, {
            className: a.table,
            size: "small",
            "aria-label": "sail data",
            children: [
              Object(n.jsx)(Ge.a, {
                children: Object(n.jsxs)($e.a, {
                  children: [
                    Object(n.jsx)(He.a, {}),
                    Object(n.jsx)(He.a, { align: "right", children: "luff" }),
                    Object(n.jsx)(He.a, { align: "right", children: "head" }),
                    Object(n.jsx)(He.a, { align: "right", children: "foot" }),
                  ],
                }),
              }),
              Object(n.jsx)(De.a, {
                children: t.map(function (e) {
                  return Object(n.jsxs)(
                    $e.a,
                    {
                      children: [
                        Object(n.jsx)(He.a, {
                          component: "th",
                          scope: "row",
                          children: e.name,
                        }),
                        Object(n.jsx)(He.a, {
                          align: "right",
                          children: e.luff,
                        }),
                        Object(n.jsx)(He.a, {
                          align: "right",
                          children: e.head,
                        }),
                        Object(n.jsx)(He.a, {
                          align: "right",
                          children: e.foot,
                        }),
                      ],
                    },
                    e.name
                  );
                }),
              }),
            ],
          }),
        });
      }
      var Ye = new Intl.NumberFormat("en-GB", {
        currency: "GBP",
        style: "currency",
      });
      var qe = a(677),
        Ae = a(687),
        Ee = a(678),
        Ue = Object(Z.a)(function (e) {
          return { root: { height: "auto", padding: 0 } };
        });
      function Je(e) {
        var t = e.onChange,
          a = e.value,
          r = e.panes,
          o = Ue();
        return Object(n.jsx)(qe.a, {
          position: "static",
          color: "inherit",
          classes: o,
          children: Object(n.jsx)(Ae.a, {
            onChange: t,
            value: a,
            indicatorColor: "primary",
            textColor: "primary",
            centered: !0,
            children: r.map(function (e, t) {
              return Object(n.jsx)(Ee.a, { label: e.title }, t);
            }),
          }),
        });
      }
      function Ve(e) {
        if (e) return "".concat(((100 * e) / 2.54 / 12).toFixed(2), " ft");
      }
      function Ke(e) {
        return null === e.hull_form ? null : e.hull_form.replace(/_/g, " ");
      }
      function Qe(e) {
        var t,
          a = e.classes,
          c = e.boat,
          i = Object(Pe.a)(),
          s = Object(o.useState)(0),
          C = Object(r.a)(s, 2),
          l = C[0],
          b = C[1],
          d = [
            {
              title: "Registration and location",
              children: Object(n.jsxs)(v.a, {
                children: [
                  Object(n.jsx)(Ie, {
                    value: c.previous_names,
                    label: "Previous name/s",
                  }),
                  Object(n.jsx)(Ie, {
                    value: c.place_built,
                    label: "Place built",
                  }),
                  Object(n.jsx)(Ie, {
                    value: c.home_country,
                    label: "Home Country",
                  }),
                  Object(n.jsx)(Ie, {
                    value: c.year_is_approximate ? "around " : "" + c.year,
                    label: "Year of Build",
                  }),
                  Object(n.jsx)(Ie, {
                    value: c.sail_number,
                    label: "Sail No.",
                  }),
                  Object(n.jsx)(Ie, {
                    value: c.ssr,
                    label: "Small Ships Registry no. (SSR)",
                  }),
                  Object(n.jsx)(Ie, {
                    value: c.nhsr,
                    label: "National Register of Historic Vessels no. (NRHV)",
                  }),
                  Object(n.jsx)(Ie, {
                    value: c.fishing_number,
                    label: "Fishing No.",
                  }),
                  Object(n.jsx)(Ie, { value: c.callsign, label: "Call Sign" }),
                  Object(n.jsx)(Ie, {
                    value: c.nsbr,
                    label: "National Small Boat Register",
                  }),
                  Object(n.jsx)(Ie, {
                    value: c.uk_part1,
                    label: "Official Registration",
                  }),
                ],
              }),
            },
            {
              title: "Construction",
              children: Object(n.jsxs)(v.a, {
                children: [
                  Object(n.jsx)(Ie, {
                    value: c.genericTypeByGenericType,
                    label: "Generic type",
                  }),
                  Object(n.jsx)(Ie, { value: Ke(c), label: "Hull form" }),
                  Object(n.jsx)(Ie, {
                    value: c.builderByBuilder,
                    label: "Builder",
                  }),
                  Object(n.jsx)(Ie, {
                    value: c.constructionMaterialByConstructionMaterial,
                    label: "Construction material",
                  }),
                  Object(n.jsx)(Ie, {
                    value: c.constructionMethodByConstructionMethod,
                    label: "Construction method",
                  }),
                  Object(n.jsx)(Ie, {
                    value: c.construction_details,
                    label: "Construction details",
                  }),
                ],
              }),
            },
            {
              title: "Hull",
              children: Object(n.jsxs)(v.a, {
                children: [
                  Object(n.jsx)(Ie, {
                    value: Ve(c.length_on_deck),
                    label: "Length on deck (LOD)",
                  }),
                  Object(n.jsx)(Ie, {
                    label: "Length overall (LOA)",
                    value: Ve(
                      c.handicap_data ? c.handicap_data.length_overall : void 0
                    ),
                  }),
                  Object(n.jsx)(Ie, {
                    label: "Waterline Length (LWL)",
                    value: Ve(
                      c.handicap_data
                        ? c.handicap_data.length_on_waterline
                        : void 0
                    ),
                  }),
                  Object(n.jsx)(Ie, { value: Ve(c.beam), label: "Beam" }),
                  Object(n.jsx)(Ie, { value: Ve(c.draft), label: "Draft" }),
                ],
              }),
            },
          ];
        if (
          (c.full_description &&
            d.unshift({
              title: "Full Description",
              children: Object(n.jsx)(v.a, {
                dangerouslySetInnerHTML: { __html: c.full_description },
              }),
            }),
          c.handicap_data)
        ) {
          var j = c.handicap_data,
            u = [];
          Object.entries(j).forEach(function (e) {
            var t = Object(r.a)(e, 2),
              a = t[0],
              n = t[1];
            n.luff && u.push(Object(f.a)({ name: a }, n));
          }),
            (j.main || j.thcf || j.calculated_thcf || j.fore_triangle_base) &&
              d.push({
                title: "Rig and Sails",
                children: Object(n.jsxs)(v.a, {
                  children: [
                    Object(n.jsx)(Ie, {
                      label: "fore triangle base",
                      value: Ve(j.fore_triangle_base),
                    }),
                    Object(n.jsx)(Ie, {
                      label: "fore triangle height",
                      value: Ve(j.fore_triangle_height),
                    }),
                    Object(n.jsx)(Ie, {
                      label: "Calculated THCF",
                      value: j.calculated_thcf,
                    }),
                    Object(n.jsx)(Ie, { label: "THCF", value: j.thcf }),
                    Object(n.jsx)(We, { classes: a, rows: u }),
                  ],
                }),
              });
        }
        if (c.for_sale_state && "for_sale" === c.for_sale_state.text) {
          var h = c.for_sales[0];
          d.unshift({
            title: "For Sale",
            children: Object(n.jsxs)(v.a, {
              children: [
                Object(n.jsx)(Ie, {
                  label: "Price",
                  value:
                    ((t = h.asking_price), 0 === t ? "offers" : Ye.format(t)),
                }),
                Object(n.jsx)("div", {
                  dangerouslySetInnerHTML: { __html: h.sales_text },
                }),
              ],
            }),
          });
        }
        return Object(n.jsxs)(n.Fragment, {
          children: [
            Object(n.jsx)(Je, {
              onChange: function (e, t) {
                b(t);
              },
              value: l,
              panes: d,
            }),
            Object(n.jsx)(Ne.a, {
              axis: "rtl" === i.direction ? "x-reverse" : "x",
              index: l,
              onChangeIndex: function (e) {
                b(e);
              },
              children: d.map(function (e, t) {
                return Object(n.jsx)(
                  Te,
                  { value: l, index: t, children: e.children },
                  t
                );
              }),
            }),
          ],
        });
      }
      var Xe = a(691),
        et = a(333),
        tt = a(334),
        at = a.n(tt);
      function nt(e) {
        console.log("process", e);
        var t = e.match(/Log (.*)\/(.*)/);
        return t
          ? (function (e) {
              var t = Object(r.a)(e, 3),
                a = t[1],
                o = t[2];
              return Object(n.jsxs)("a", {
                href: "https://www.oga.org.uk/news/archive/gaffers_log.html",
                children: ["Gaffers Log ", a, " edition ", o],
              });
            })(t)
          : (t = e.match(/CB *([^ ]*) *([^ ]*) *(.*)/))
          ? (function (e) {
              var t = Object(r.a)(e, 4),
                a = t[1],
                o = t[2],
                c = t[3],
                i = "https://www.chelseamagazines.com/shop/?s=classic+boat",
                s = new Date("".concat(a, " ").concat(o));
              if (s >= Date.parse("2016-01-01")) {
                var C = s
                    .toLocaleString("default", { month: "long" })
                    .toLowerCase(),
                  l = s.getFullYear();
                i = "https://www.chelseamagazines.com/shop/product/classic-boat-"
                  .concat(C, "-")
                  .concat(l, "/");
              }
              return Object(n.jsxs)("a", {
                href: i,
                children: ["Classic Boat ", a, " ", o, " ", c],
              });
            })(t)
          : (t = e.match(/Classic Sailor *([^ ]*) *([^ ]*) *(.*)/))
          ? (function (e) {
              var t = Object(r.a)(e, 4),
                a = t[1],
                o = t[2],
                c = t[3];
              return Object(n.jsxs)("a", {
                href: "https://classicsailor.com/magazine-archive/",
                children: ["Classic Sailor ", a, " ", o, " ", c],
              });
            })(t)
          : e;
      }
      function rt(e) {
        var t = e.boat;
        return t.reference
          ? Object(n.jsxs)(n.Fragment, {
              children: [
                Object(n.jsx)(_.a, {
                  children: Object(n.jsx)(q.a, {
                    fontWeight: "bold",
                    component: "span",
                    children: "References:",
                  }),
                }),
                t.reference.map(function (e) {
                  return Object(n.jsx)("div", { children: nt(e) });
                }),
              ],
            })
          : "";
      }
      var ot = a(335),
        ct = a.n(ot);
      function it(e) {
        var t = e.classes,
          a = e.boat,
          c = e.location,
          i = Object(o.useState)(!1),
          s = Object(r.a)(i, 2),
          C = s[0],
          l = s[1],
          b = Object(Be.a)(t.paper, t.fillHeight),
          d = (function (e, t) {
            return t.href ? je.boatUrl(e, t) : ie.boatUrl(e, t);
          })(a.oga_no, c);
        return Object(n.jsxs)(v.a, {
          className: b,
          children: [
            Object(n.jsx)(_.a, {
              variant: "h4",
              component: "h4",
              children: "Details",
            }),
            Object(n.jsx)(Ie, { value: a.oga_no, label: "OGA no" }),
            Object(n.jsx)(Ie, { value: a.mainsail_type, label: "Mainsail" }),
            Object(n.jsx)(Ie, {
              value: a.rigTypeByRigType && a.rigTypeByRigType.name,
              label: "Rig",
            }),
            Object(n.jsx)(Ie, {
              value: a.home_port,
              label: "Home port or other location",
            }),
            Object(n.jsx)(Ie, {
              value: a.website
                ? Object(n.jsx)("a", {
                    href: a.website,
                    rel: "noopenner noreferrer",
                    target: "_blank",
                    children: "click here",
                  })
                : void 0,
              label: "Website",
            }),
            Object(n.jsx)(q.a, {
              className: "MuiTypography-body1",
              children: Object(n.jsx)("div", {
                dangerouslySetInnerHTML: { __html: a.short_description },
              }),
            }),
            Object(n.jsx)(rt, { boat: a }),
            Object(n.jsxs)("div", {
              children: [
                Object(n.jsx)(et.CopyToClipboard, {
                  text: d,
                  onCopy: function () {
                    return l(!0);
                  },
                  children: Object(n.jsx)(X.a, {
                    endIcon: Object(n.jsx)(ct.a, {}),
                    size: "small",
                    variant: "contained",
                    className: t.button,
                    children: "Copy page url",
                  }),
                }),
                Object(n.jsx)(Xe.a, {
                  anchorOrigin: { vertical: "bottom", horizontal: "right" },
                  open: C,
                  autoHideDuration: 2e3,
                  onClose: function () {
                    l(!1);
                  },
                  message: "URL copied to clipboard.",
                  severity: "success",
                }),
              ],
            }),
            Object(n.jsx)("div", {
              children: Object(n.jsx)(at.a, {
                href: d,
                language: "en_GB",
                appId: "644249802921642",
                version: "v2.12",
              }),
            }),
          ],
        });
      }
      var st = a(115),
        Ct = a.n(st),
        lt = a(692);
      function bt(e) {
        var t = e.onClose,
          a = e.boat,
          r = e.open,
          o = e.classes,
          c = "https://form.jotform.com/203251962423046?ogaNumber=".concat(
            a.oga_no
          );
        return Object(n.jsx)(lt.a, {
          classes: { paper: o.jotDialogPaper },
          fullWidth: !0,
          onClose: t,
          open: r,
          children: Object(n.jsx)("iframe", {
            title: "JotFormIFrame-203251962423046",
            id: "JotFormIFrame-203251962423046",
            onload: "window.parent.scrollTo(0,0)",
            allowtransparency: "true",
            allowfullscreen: "true",
            src: c,
            frameborder: "0",
            style: {
              width: "1px",
              minWidth: "100%",
              minHeight: "100%",
              height: "8000px",
              border: "none",
            },
            scrolling: "yes",
          }),
        });
      }
      function dt(e) {
        var t = e.boat,
          a = e.classes,
          c = Object(o.useState)(!1),
          i = Object(r.a)(c, 2),
          s = i[0],
          C = i[1];
        return Object(n.jsxs)(n.Fragment, {
          children: [
            Object(n.jsx)(X.a, {
              className: a.button,
              size: "small",
              endIcon: Object(n.jsx)(Ct.a, {}),
              variant: "contained",
              color: "primary",
              onClick: function () {
                C(!0);
              },
              children: "Add pictures of this boat",
            }),
            Object(n.jsx)(bt, {
              classes: a,
              boat: t,
              open: s,
              onClose: function (e) {
                C(!1);
              },
            }),
          ],
        });
      }
      var jt = a(116),
        ut = a.n(jt),
        ht = a(336),
        gt = a(682),
        pt = a(680),
        ft = a(679),
        Ot = a(337),
        mt = a.n(Ot),
        xt = a(343);
      var vt = function (e) {
        return Object(n.jsx)(
          xt.a,
          Object(f.a)(
            Object(f.a)({}, e),
            {},
            {
              children: Object(n.jsxs)("g", {
                children: [
                  Object(n.jsx)("path", {
                    d:
                      "M 1.964844 23.5625 C 1.949219 23.535156 1.890625 23.519531 1.832031 23.519531 C 1.777344 23.519531 1.730469 23.5 1.730469 23.46875 C 1.730469 23.449219 1.636719 23.421875 1.519531 23.421875 C 1.34375 23.421875 1.296875 23.398438 1.175781 23.238281 C 1.097656 23.144531 1.035156 23.035156 1.035156 23.003906 C 1.035156 22.96875 0.980469 22.949219 0.917969 22.949219 C 0.835938 22.949219 0.816406 22.933594 0.863281 22.910156 C 0.917969 22.878906 0.90625 22.804688 0.792969 22.59375 C 0.722656 22.445312 0.675781 22.300781 0.695312 22.273438 C 0.722656 22.234375 0.707031 22.234375 0.671875 22.25 C 0.625 22.277344 0.605469 22.265625 0.613281 22.230469 C 0.628906 22.097656 0.605469 22.050781 0.394531 21.816406 C 0.277344 21.6875 0.203125 21.5625 0.226562 21.542969 C 0.242188 21.515625 0.230469 21.515625 0.191406 21.539062 C 0.15625 21.558594 0.0898438 21.546875 0.0507812 21.515625 C -0.0195312 21.472656 -0.015625 21.453125 0.0507812 21.390625 C 0.0898438 21.355469 0.195312 21.304688 0.285156 21.28125 C 0.414062 21.246094 0.460938 21.261719 0.558594 21.359375 C 0.699219 21.492188 0.800781 21.460938 0.6875 21.3125 C 0.589844 21.1875 0.589844 21.140625 0.6875 21.140625 C 0.734375 21.140625 0.835938 21.105469 0.90625 21.0625 C 0.976562 21.019531 1.035156 21.007812 1.035156 21.035156 C 1.035156 21.0625 1.003906 21.089844 0.976562 21.105469 C 0.933594 21.113281 1.085938 21.136719 1.316406 21.144531 C 1.539062 21.15625 1.707031 21.152344 1.703125 21.136719 C 1.691406 21.113281 1.742188 21.089844 1.820312 21.078125 C 1.894531 21.0625 1.964844 21.085938 1.976562 21.113281 C 2 21.15625 2.058594 21.160156 2.199219 21.136719 C 2.570312 21.054688 3.253906 20.953125 4.128906 20.851562 C 4.609375 20.800781 5.078125 20.726562 5.164062 20.703125 C 5.445312 20.625 5.582031 20.621094 5.582031 20.6875 C 5.582031 20.722656 5.546875 20.773438 5.503906 20.800781 C 5.457031 20.835938 5.441406 20.902344 5.457031 20.953125 C 5.480469 21.035156 5.523438 21.042969 5.734375 21.023438 C 5.898438 21.011719 5.945312 21.011719 5.875 21.042969 C 5.816406 21.070312 5.664062 21.085938 5.539062 21.085938 C 5.417969 21.089844 5.304688 21.105469 5.292969 21.128906 C 5.257812 21.175781 6.289062 21.140625 6.359375 21.085938 C 6.382812 21.070312 6.464844 21.058594 6.53125 21.078125 C 6.617188 21.09375 6.648438 21.085938 6.652344 21.011719 C 6.652344 20.960938 6.671875 20.878906 6.683594 20.828125 C 6.722656 20.691406 6.722656 20.601562 6.675781 20.5 C 6.648438 20.421875 6.648438 20.417969 6.695312 20.472656 C 6.742188 20.535156 6.753906 20.523438 6.753906 20.4375 C 6.753906 20.382812 6.730469 20.320312 6.695312 20.300781 C 6.660156 20.285156 6.71875 20.234375 6.839844 20.183594 C 7.015625 20.105469 7.128906 20.097656 7.589844 20.125 C 8 20.148438 8.160156 20.140625 8.222656 20.089844 C 8.277344 20.054688 8.304688 20.050781 8.304688 20.085938 C 8.304688 20.125 8.539062 20.140625 9.074219 20.140625 C 9.917969 20.140625 10.425781 20.097656 10.25 20.046875 C 10.1875 20.023438 10.332031 20.003906 10.601562 19.984375 C 11.101562 19.953125 11.464844 19.964844 11.546875 20.007812 C 11.582031 20.03125 11.617188 20.023438 11.628906 20 C 11.632812 19.972656 11.714844 19.941406 11.804688 19.9375 C 11.890625 19.921875 11.921875 19.929688 11.875 19.9375 C 11.820312 19.941406 11.773438 19.984375 11.773438 20.019531 C 11.773438 20.054688 11.734375 20.097656 11.6875 20.105469 C 11.597656 20.125 11.597656 20.132812 11.679688 20.136719 C 11.726562 20.136719 11.804688 20.105469 11.84375 20.070312 C 11.886719 20.035156 11.992188 19.988281 12.074219 19.96875 C 12.207031 19.9375 12.214844 19.933594 12.125 19.898438 C 12.039062 19.867188 12.054688 19.863281 12.191406 19.863281 C 12.285156 19.855469 12.367188 19.878906 12.367188 19.902344 C 12.367188 19.933594 12.332031 19.949219 12.300781 19.949219 C 12.25 19.949219 12.253906 19.964844 12.308594 19.996094 C 12.367188 20.023438 12.3125 20.046875 12.148438 20.058594 L 11.910156 20.082031 L 12.144531 20.082031 C 12.308594 20.089844 12.402344 20.070312 12.449219 20.007812 C 12.519531 19.933594 12.519531 19.933594 12.523438 20.019531 C 12.523438 20.085938 12.542969 20.097656 12.582031 20.058594 C 12.652344 20 12.605469 19.902344 12.496094 19.902344 C 12.449219 19.902344 12.417969 19.863281 12.417969 19.804688 C 12.417969 19.753906 12.449219 19.714844 12.496094 19.714844 C 12.53125 19.714844 12.582031 19.644531 12.601562 19.5625 C 12.664062 19.292969 12.664062 19.164062 12.59375 19.175781 C 12.511719 19.1875 12.566406 18.847656 12.652344 18.796875 C 12.695312 18.769531 12.695312 18.75 12.660156 18.726562 C 12.617188 18.699219 12.613281 18.484375 12.640625 18.066406 C 12.730469 16.757812 12.792969 15.769531 12.816406 15.429688 C 12.828125 15.234375 12.859375 14.847656 12.871094 14.574219 C 12.957031 13.085938 12.96875 12.976562 13.035156 12.925781 C 13.140625 12.851562 13.203125 11.746094 13.105469 11.636719 C 13.046875 11.578125 13.046875 11.558594 13.097656 11.542969 C 13.144531 11.53125 13.164062 11.429688 13.15625 11.25 C 13.15625 11.101562 13.140625 11.03125 13.128906 11.101562 C 13.070312 11.382812 13.035156 11.25 13.058594 10.847656 C 13.082031 10.410156 13.082031 10.410156 13.109375 10.695312 C 13.144531 10.941406 13.152344 10.90625 13.15625 10.464844 C 13.15625 10.140625 13.1875 9.960938 13.222656 9.980469 C 13.25 9.996094 13.273438 9.988281 13.273438 9.960938 C 13.273438 9.9375 13.246094 9.910156 13.214844 9.910156 C 13.175781 9.910156 13.15625 9.753906 13.175781 9.417969 C 13.179688 9.148438 13.175781 8.933594 13.15625 8.949219 C 13.128906 8.953125 13.105469 9.097656 13.097656 9.257812 C 13.097656 9.472656 13.085938 9.503906 13.074219 9.367188 C 13.0625 9.257812 13.074219 8.957031 13.097656 8.691406 C 13.128906 8.332031 13.121094 8.199219 13.074219 8.160156 C 13.039062 8.128906 13.015625 8.042969 13.027344 7.96875 C 13.039062 7.898438 13.035156 7.871094 13.023438 7.902344 C 12.988281 7.980469 12.898438 7.933594 12.898438 7.835938 C 12.898438 7.800781 12.945312 7.769531 13.003906 7.769531 C 13.09375 7.769531 13.109375 7.800781 13.109375 7.949219 C 13.109375 8.085938 13.128906 8.105469 13.164062 8.054688 C 13.210938 8.003906 13.222656 8.066406 13.214844 8.28125 C 13.203125 8.570312 13.269531 8.78125 13.28125 8.503906 C 13.28125 8.429688 13.292969 8.3125 13.296875 8.246094 C 13.304688 8.179688 13.28125 8.082031 13.234375 8.019531 C 13.199219 7.964844 13.164062 7.835938 13.164062 7.734375 C 13.15625 7.636719 13.140625 7.464844 13.117188 7.351562 C 13.082031 7.195312 13.09375 7.15625 13.152344 7.15625 C 13.191406 7.15625 13.214844 7.132812 13.191406 7.109375 C 13.175781 7.082031 13.191406 7.046875 13.222656 7.03125 C 13.25 7.011719 13.28125 6.898438 13.273438 6.777344 C 13.257812 6.453125 13.28125 6.425781 13.328125 6.726562 L 13.363281 6.988281 L 13.367188 6.714844 C 13.378906 6.496094 13.363281 6.4375 13.296875 6.4375 C 13.191406 6.4375 13.199219 6.359375 13.316406 6.296875 C 13.363281 6.273438 13.378906 6.246094 13.351562 6.246094 C 13.320312 6.246094 13.285156 6.191406 13.28125 6.121094 C 13.28125 6.042969 13.25 5.984375 13.226562 5.976562 C 13.210938 5.96875 13.199219 5.632812 13.210938 5.222656 C 13.222656 4.707031 13.210938 4.488281 13.164062 4.488281 C 13.132812 4.488281 13.117188 4.503906 13.132812 4.53125 C 13.179688 4.597656 13.039062 4.621094 12.976562 4.5625 C 12.898438 4.496094 12.953125 4.144531 13.046875 4.117188 C 13.09375 4.109375 13.109375 4.152344 13.109375 4.28125 C 13.109375 4.371094 13.128906 4.4375 13.15625 4.421875 C 13.175781 4.402344 13.191406 4.136719 13.199219 3.828125 C 13.203125 3.496094 13.226562 3.226562 13.269531 3.164062 C 13.320312 3.078125 13.316406 3.0625 13.25 3.0625 C 13.203125 3.0625 13.179688 3.089844 13.199219 3.128906 C 13.214844 3.164062 13.203125 3.207031 13.167969 3.226562 C 13.105469 3.261719 13.09375 3.121094 13.144531 2.992188 C 13.167969 2.925781 13.191406 2.925781 13.257812 2.976562 C 13.328125 3.027344 13.339844 3.007812 13.304688 2.832031 C 13.285156 2.707031 13.292969 2.636719 13.328125 2.65625 C 13.355469 2.671875 13.378906 2.726562 13.378906 2.777344 C 13.378906 2.824219 13.410156 2.875 13.449219 2.882812 C 13.503906 2.90625 13.503906 2.914062 13.449219 2.914062 C 13.355469 2.921875 13.355469 3.210938 13.449219 3.292969 C 13.503906 3.347656 13.496094 3.347656 13.4375 3.324219 C 13.386719 3.292969 13.378906 3.3125 13.410156 3.398438 C 13.433594 3.460938 13.449219 4.316406 13.449219 5.292969 C 13.449219 6.277344 13.457031 7.050781 13.46875 7.023438 C 13.484375 6.992188 13.519531 6.960938 13.542969 6.960938 C 13.578125 6.960938 13.585938 6.984375 13.566406 7.011719 C 13.550781 7.039062 13.519531 7.28125 13.515625 7.550781 C 13.503906 7.828125 13.460938 8.171875 13.433594 8.332031 C 13.398438 8.484375 13.378906 8.65625 13.390625 8.703125 C 13.402344 8.75 13.4375 8.679688 13.460938 8.535156 C 13.519531 8.25 13.519531 10.148438 13.460938 11.132812 C 13.4375 11.535156 13.449219 11.671875 13.503906 11.6875 C 13.550781 11.714844 13.550781 11.726562 13.503906 11.75 C 13.449219 11.765625 13.433594 11.9375 13.433594 12.363281 C 13.433594 12.785156 13.449219 12.957031 13.503906 12.972656 C 13.554688 13 13.554688 13.007812 13.503906 13.035156 C 13.457031 13.050781 13.433594 13.207031 13.433594 13.5625 C 13.433594 13.84375 13.457031 14.046875 13.472656 14.015625 C 13.496094 13.988281 13.515625 14.1875 13.519531 14.445312 C 13.519531 14.710938 13.507812 14.867188 13.484375 14.785156 C 13.46875 14.710938 13.457031 15.027344 13.449219 15.488281 C 13.449219 15.980469 13.46875 16.335938 13.496094 16.335938 C 13.519531 16.335938 13.527344 16.355469 13.515625 16.382812 C 13.492188 16.414062 13.460938 16.417969 13.445312 16.414062 C 13.421875 16.402344 13.402344 16.660156 13.402344 16.992188 C 13.402344 17.53125 13.378906 17.925781 13.292969 18.835938 C 13.273438 19.046875 13.246094 19.128906 13.1875 19.128906 C 13.144531 19.128906 13.105469 19.09375 13.105469 19.050781 C 13.097656 19.003906 13.082031 19.042969 13.058594 19.117188 L 13.015625 19.261719 L 13.011719 19.132812 C 13.011719 19.0625 13.035156 18.992188 13.058594 18.976562 C 13.09375 18.960938 13.109375 18.898438 13.109375 18.84375 C 13.109375 18.757812 13.097656 18.75 13.058594 18.808594 C 13.035156 18.847656 13.003906 18.859375 13.003906 18.832031 C 13.003906 18.800781 13.035156 18.757812 13.058594 18.730469 C 13.121094 18.675781 13.15625 18.292969 13.1875 17.476562 C 13.210938 17 13.175781 16.71875 13.085938 16.414062 C 13.050781 16.300781 13.058594 16.28125 13.117188 16.308594 C 13.179688 16.347656 13.179688 16.339844 13.117188 16.273438 C 13.050781 16.203125 13.058594 16.191406 13.144531 16.1875 C 13.203125 16.1875 13.222656 16.171875 13.179688 16.15625 C 13.144531 16.148438 13.109375 16.070312 13.109375 15.996094 C 13.109375 15.917969 13.085938 15.855469 13.050781 15.855469 C 13.027344 15.855469 13.015625 15.878906 13.035156 15.90625 C 13.046875 15.933594 13.027344 15.9375 12.980469 15.921875 C 12.917969 15.902344 12.898438 15.949219 12.886719 16.21875 L 12.882812 16.550781 L 12.847656 16.285156 C 12.824219 16.113281 12.800781 16.355469 12.777344 17.050781 C 12.757812 17.609375 12.734375 18.191406 12.730469 18.332031 C 12.722656 18.476562 12.734375 18.648438 12.757812 18.726562 C 12.792969 18.828125 12.789062 18.859375 12.71875 18.859375 C 12.671875 18.859375 12.628906 18.875 12.628906 18.902344 C 12.628906 18.929688 12.671875 18.933594 12.71875 18.917969 C 12.789062 18.894531 12.792969 18.929688 12.753906 19.148438 C 12.734375 19.289062 12.710938 19.496094 12.710938 19.597656 C 12.710938 19.734375 12.6875 19.789062 12.648438 19.773438 C 12.613281 19.757812 12.578125 19.773438 12.578125 19.800781 C 12.578125 19.832031 12.640625 19.855469 12.71875 19.855469 C 12.835938 19.855469 12.847656 19.863281 12.792969 19.929688 C 12.757812 19.964844 12.734375 20.019531 12.746094 20.054688 C 12.765625 20.085938 12.8125 20.050781 12.863281 19.964844 C 12.957031 19.804688 13.039062 19.746094 12.980469 19.875 C 12.96875 19.917969 12.976562 19.949219 13.011719 19.949219 C 13.039062 19.949219 13.058594 19.984375 13.039062 20.019531 C 13.023438 20.066406 13.039062 20.089844 13.085938 20.089844 C 13.121094 20.089844 13.167969 20.105469 13.179688 20.132812 C 13.199219 20.152344 13.050781 20.152344 12.863281 20.152344 C 12.648438 20.136719 12.523438 20.152344 12.523438 20.183594 C 12.523438 20.21875 12.671875 20.234375 12.917969 20.234375 L 13.296875 20.234375 L 13.28125 19.800781 C 13.269531 19.480469 13.25 19.378906 13.203125 19.421875 C 13.109375 19.503906 13.046875 19.484375 13.070312 19.371094 C 13.082031 19.316406 13.132812 19.246094 13.191406 19.21875 C 13.25 19.1875 13.308594 19.160156 13.320312 19.152344 C 13.332031 19.148438 13.363281 18.835938 13.390625 18.464844 C 13.472656 17.207031 13.519531 16.738281 13.53125 16.953125 C 13.542969 17.070312 13.566406 17.21875 13.585938 17.285156 C 13.609375 17.351562 13.597656 17.46875 13.566406 17.546875 C 13.492188 17.710938 13.460938 18.074219 13.460938 18.75 L 13.460938 19.234375 L 13.316406 19.234375 C 13.226562 19.234375 13.164062 19.253906 13.164062 19.28125 C 13.164062 19.296875 13.222656 19.304688 13.292969 19.296875 C 13.402344 19.28125 13.421875 19.296875 13.457031 19.46875 C 13.46875 19.578125 13.46875 19.75 13.457031 19.855469 C 13.433594 19.984375 13.4375 20.046875 13.480469 20.046875 C 13.550781 20.046875 13.550781 20.046875 13.539062 18.832031 C 13.53125 18.339844 13.542969 17.941406 13.554688 17.949219 C 13.585938 17.980469 13.644531 18.925781 13.648438 19.664062 C 13.660156 20.292969 13.671875 20.332031 13.820312 20.332031 C 13.878906 20.332031 13.914062 20.355469 13.894531 20.390625 C 13.890625 20.421875 13.894531 20.492188 13.929688 20.539062 C 13.972656 20.617188 13.960938 20.625 13.890625 20.59375 C 13.808594 20.574219 13.800781 20.582031 13.855469 20.636719 C 13.914062 20.699219 13.882812 20.707031 13.660156 20.726562 C 13.445312 20.738281 13.460938 20.742188 13.765625 20.75 C 14.136719 20.757812 14.199219 20.722656 14.046875 20.585938 C 14.007812 20.542969 13.964844 20.46875 13.964844 20.410156 C 13.972656 20.316406 13.972656 20.308594 14.023438 20.390625 C 14.066406 20.449219 14.105469 20.464844 14.140625 20.4375 C 14.183594 20.410156 14.3125 20.367188 14.433594 20.339844 C 14.59375 20.292969 14.664062 20.25 14.675781 20.171875 C 14.691406 20.113281 14.703125 20.140625 14.710938 20.25 C 14.714844 20.375 14.691406 20.425781 14.632812 20.425781 C 14.535156 20.425781 14.535156 20.507812 14.632812 20.601562 C 14.722656 20.671875 15.003906 20.6875 16.199219 20.667969 C 16.554688 20.660156 16.636719 20.652344 16.636719 20.585938 C 16.636719 20.539062 16.667969 20.527344 16.707031 20.554688 C 16.8125 20.609375 16.917969 20.621094 17.253906 20.578125 C 17.5 20.558594 17.539062 20.542969 17.441406 20.519531 C 17.335938 20.5 17.375 20.476562 17.628906 20.453125 C 17.804688 20.4375 17.992188 20.40625 18.042969 20.398438 C 18.097656 20.382812 18.132812 20.398438 18.132812 20.4375 C 18.132812 20.484375 18.144531 20.484375 18.179688 20.4375 C 18.195312 20.410156 18.371094 20.371094 18.558594 20.367188 C 18.824219 20.34375 18.917969 20.320312 18.921875 20.265625 C 18.945312 20.167969 19.097656 20.164062 19.097656 20.253906 C 19.097656 20.292969 19.082031 20.332031 19.058594 20.347656 C 19.035156 20.355469 19.046875 20.355469 19.085938 20.351562 C 19.121094 20.339844 19.175781 20.375 19.210938 20.4375 C 19.25 20.523438 19.257812 20.523438 19.234375 20.449219 C 19.222656 20.398438 19.199219 20.316406 19.175781 20.269531 C 19.152344 20.207031 19.15625 20.183594 19.210938 20.191406 C 19.25 20.199219 19.328125 20.1875 19.378906 20.164062 C 19.507812 20.117188 19.554688 20.167969 19.46875 20.257812 C 19.433594 20.292969 19.425781 20.332031 19.457031 20.332031 C 19.480469 20.332031 19.507812 20.367188 19.507812 20.402344 C 19.507812 20.4375 19.480469 20.472656 19.449219 20.472656 C 19.414062 20.472656 19.425781 20.5 19.46875 20.519531 C 19.53125 20.558594 19.527344 20.570312 19.433594 20.570312 C 19.367188 20.570312 19.296875 20.589844 19.28125 20.617188 C 19.226562 20.691406 19.503906 20.671875 19.578125 20.589844 C 19.613281 20.554688 19.679688 20.519531 19.71875 20.519531 C 19.765625 20.519531 19.777344 20.503906 19.765625 20.472656 C 19.703125 20.382812 19.988281 20.425781 20.089844 20.523438 C 20.171875 20.605469 20.230469 20.621094 20.40625 20.59375 C 20.523438 20.578125 20.773438 20.558594 20.96875 20.542969 C 21.160156 20.527344 21.390625 20.507812 21.472656 20.492188 C 21.566406 20.476562 21.710938 20.457031 21.8125 20.453125 C 21.90625 20.441406 22 20.425781 22.015625 20.410156 C 22.035156 20.390625 22.085938 20.40625 22.132812 20.4375 C 22.199219 20.484375 22.203125 20.484375 22.175781 20.4375 C 22.144531 20.390625 22.191406 20.375 22.375 20.375 C 22.554688 20.375 22.621094 20.359375 22.636719 20.292969 C 22.660156 20.21875 22.667969 20.21875 22.671875 20.292969 C 22.679688 20.367188 22.703125 20.375 22.789062 20.355469 C 22.855469 20.335938 23.023438 20.316406 23.171875 20.308594 C 23.464844 20.304688 23.511719 20.265625 23.421875 20.085938 C 23.371094 19.972656 23.371094 19.972656 23.386719 20.105469 C 23.40625 20.175781 23.386719 20.234375 23.363281 20.234375 C 23.339844 20.234375 23.316406 20.199219 23.316406 20.152344 C 23.316406 20.109375 23.253906 20.015625 23.175781 19.941406 C 23.066406 19.839844 23.054688 19.816406 23.125 19.789062 C 23.175781 19.773438 23.210938 19.789062 23.210938 19.832031 C 23.210938 19.929688 23.316406 19.96875 23.386719 19.90625 C 23.480469 19.820312 23.585938 19.847656 23.585938 19.949219 C 23.585938 20.003906 23.605469 20.046875 23.628906 20.046875 C 23.675781 20.046875 23.820312 20.269531 23.828125 20.351562 C 23.828125 20.367188 23.726562 20.390625 23.609375 20.402344 C 23.222656 20.433594 22.132812 20.523438 22.015625 20.550781 C 21.671875 20.605469 21.050781 20.667969 20.984375 20.644531 C 20.949219 20.632812 20.796875 20.640625 20.664062 20.660156 C 19.914062 20.792969 19.671875 20.84375 19.8125 20.851562 C 20.070312 20.859375 19.882812 20.984375 19.601562 20.988281 C 19.351562 20.988281 19.273438 20.925781 19.484375 20.886719 C 19.574219 20.871094 19.554688 20.867188 19.433594 20.859375 C 19.339844 20.859375 19.257812 20.871094 19.257812 20.890625 C 19.25 21.011719 19.085938 21.945312 19.039062 22.109375 C 18.847656 22.765625 18.828125 22.804688 18.6875 22.804688 C 18.589844 22.804688 18.558594 22.828125 18.558594 22.929688 C 18.558594 22.996094 18.542969 23.09375 18.507812 23.136719 C 18.441406 23.238281 17.957031 23.414062 17.609375 23.449219 C 17.46875 23.457031 17.242188 23.507812 17.101562 23.550781 C 16.832031 23.625 16.75 23.597656 16.742188 23.4375 C 16.742188 23.367188 16.097656 23.371094 16.039062 23.449219 C 16.011719 23.472656 16 23.457031 16 23.414062 C 16 23.3125 15.683594 23.339844 15.578125 23.453125 C 15.519531 23.523438 15.511719 23.523438 15.53125 23.464844 C 15.566406 23.378906 15.441406 23.378906 15.253906 23.464844 C 15.097656 23.539062 14.1875 23.589844 13.773438 23.539062 C 13.527344 23.519531 13.492188 23.5 13.542969 23.445312 C 13.578125 23.402344 13.585938 23.378906 13.5625 23.371094 C 13.480469 23.367188 13.304688 23.335938 13.152344 23.304688 C 13.046875 23.285156 13.011719 23.296875 13.035156 23.328125 C 13.058594 23.367188 12.976562 23.378906 12.792969 23.371094 C 12.59375 23.363281 12.496094 23.382812 12.449219 23.429688 C 12.378906 23.507812 11.59375 23.550781 11.539062 23.472656 C 11.523438 23.453125 11.558594 23.445312 11.617188 23.453125 C 11.675781 23.46875 11.722656 23.457031 11.722656 23.433594 C 11.722656 23.371094 11.511719 23.378906 11.410156 23.4375 C 11.375 23.457031 11.289062 23.488281 11.21875 23.496094 C 11.152344 23.503906 11.042969 23.523438 10.984375 23.535156 C 10.925781 23.554688 10.859375 23.546875 10.847656 23.523438 C 10.824219 23.496094 10.75 23.496094 10.65625 23.519531 C 10.542969 23.546875 10.492188 23.539062 10.492188 23.503906 C 10.492188 23.464844 10.480469 23.464844 10.449219 23.496094 C 10.433594 23.523438 10.164062 23.539062 9.824219 23.539062 C 9.507812 23.539062 9.207031 23.5625 9.171875 23.585938 C 9.125 23.605469 9.101562 23.601562 9.101562 23.5625 C 9.101562 23.515625 9.03125 23.496094 8.863281 23.496094 C 8.710938 23.496094 8.621094 23.515625 8.621094 23.554688 C 8.621094 23.636719 8.535156 23.625 8.492188 23.535156 C 8.46875 23.46875 8.457031 23.46875 8.375 23.535156 C 8.269531 23.636719 8.246094 23.632812 8.289062 23.53125 C 8.3125 23.457031 8.304688 23.453125 8.246094 23.507812 C 8.160156 23.582031 7.929688 23.585938 7.929688 23.515625 C 7.929688 23.472656 7.90625 23.472656 7.867188 23.503906 C 7.824219 23.53125 7.648438 23.546875 7.472656 23.535156 C 6.792969 23.503906 5.644531 23.523438 5.488281 23.570312 C 5.382812 23.597656 5.277344 23.601562 5.21875 23.574219 C 5.164062 23.550781 5.078125 23.546875 5.019531 23.570312 C 4.878906 23.617188 4.65625 23.621094 4.683594 23.582031 C 4.703125 23.554688 4.601562 23.539062 4.46875 23.535156 C 4.328125 23.535156 3.976562 23.515625 3.683594 23.484375 C 3.050781 23.433594 2.054688 23.453125 2.054688 23.523438 C 2.054688 23.554688 2.183594 23.566406 2.421875 23.539062 C 2.984375 23.488281 3.824219 23.507812 3.894531 23.574219 C 3.90625 23.585938 3.484375 23.597656 2.957031 23.597656 C 2.429688 23.597656 1.984375 23.585938 1.964844 23.5625 Z M 2.242188 22.835938 C 2.035156 22.648438 1.796875 22.410156 1.714844 22.3125 C 1.632812 22.214844 1.539062 22.148438 1.515625 22.164062 C 1.484375 22.179688 1.539062 22.273438 1.632812 22.367188 C 2.140625 22.898438 2.464844 23.183594 2.535156 23.183594 C 2.582031 23.183594 2.457031 23.035156 2.242188 22.835938 Z M 2.480469 22.933594 C 2.480469 22.921875 2.40625 22.859375 2.304688 22.777344 L 2.140625 22.636719 L 2.257812 22.796875 C 2.359375 22.917969 2.480469 22.996094 2.480469 22.933594 Z M 1.355469 22.007812 C 1.355469 21.945312 0.863281 21.515625 0.800781 21.515625 C 0.753906 21.515625 0.804688 21.578125 1.140625 21.914062 C 1.273438 22.042969 1.355469 22.082031 1.355469 22.007812 Z M 5.945312 21.914062 C 5.828125 21.90625 5.640625 21.90625 5.515625 21.914062 C 5.386719 21.925781 5.476562 21.933594 5.710938 21.933594 C 5.945312 21.933594 6.050781 21.925781 5.945312 21.914062 Z M 8.410156 21.863281 C 8.410156 21.84375 8.316406 21.832031 8.210938 21.84375 C 7.894531 21.867188 7.878906 21.890625 8.160156 21.894531 C 8.300781 21.898438 8.410156 21.878906 8.410156 21.863281 Z M 2.960938 21.757812 C 2.960938 21.730469 2.984375 21.710938 3.019531 21.710938 C 3.042969 21.710938 3.054688 21.730469 3.039062 21.757812 C 3.019531 21.792969 3.453125 21.804688 4.308594 21.796875 L 5.605469 21.789062 L 4.351562 21.757812 L 3.097656 21.730469 L 4.003906 21.722656 C 4.503906 21.714844 5.382812 21.699219 5.949219 21.691406 C 6.753906 21.671875 6.871094 21.675781 6.472656 21.710938 C 6.183594 21.730469 5.933594 21.761719 5.910156 21.78125 C 5.886719 21.804688 6.003906 21.804688 6.167969 21.789062 C 6.324219 21.773438 6.96875 21.738281 7.578125 21.710938 C 8.199219 21.6875 8.886719 21.65625 9.101562 21.640625 C 10.144531 21.582031 10.492188 21.5625 11.511719 21.519531 C 12.113281 21.488281 12.847656 21.457031 13.140625 21.453125 C 13.433594 21.453125 13.609375 21.445312 13.527344 21.4375 C 13.445312 21.425781 13.378906 21.402344 13.378906 21.375 C 13.378906 21.324219 14.617188 21.292969 14.691406 21.339844 C 14.726562 21.359375 14.761719 21.363281 14.78125 21.347656 C 14.796875 21.339844 15.054688 21.324219 15.359375 21.320312 C 15.945312 21.320312 17.046875 21.21875 17.105469 21.160156 C 17.128906 21.144531 16.90625 21.144531 16.613281 21.160156 C 16.316406 21.179688 16.070312 21.21875 16.0625 21.238281 C 16.035156 21.296875 15.78125 21.292969 15.78125 21.226562 C 15.78125 21.207031 15.8125 21.195312 15.847656 21.21875 C 15.886719 21.238281 15.886719 21.226562 15.863281 21.1875 C 15.828125 21.140625 15.804688 21.144531 15.746094 21.210938 C 15.707031 21.261719 15.675781 21.285156 15.675781 21.253906 C 15.675781 21.226562 15.484375 21.222656 15.214844 21.230469 L 14.738281 21.257812 L 14.761719 21.058594 C 14.769531 20.941406 14.796875 20.855469 14.832031 20.855469 C 14.855469 20.855469 14.867188 20.871094 14.851562 20.894531 C 14.832031 20.925781 14.996094 20.941406 15.242188 20.941406 C 15.558594 20.941406 15.675781 20.925781 15.699219 20.875 C 15.742188 20.773438 15.671875 20.757812 15.179688 20.792969 L 14.714844 20.820312 L 14.714844 21.003906 C 14.714844 21.101562 14.691406 21.191406 14.664062 21.210938 C 14.632812 21.226562 14.621094 21.144531 14.644531 20.992188 C 14.675781 20.757812 14.675781 20.742188 14.574219 20.777344 C 14.523438 20.800781 14.019531 20.824219 13.46875 20.839844 C 12.648438 20.859375 12.464844 20.851562 12.476562 20.800781 C 12.496094 20.640625 12.464844 20.332031 12.429688 20.332031 C 12.402344 20.332031 12.382812 20.476562 12.382812 20.65625 C 12.390625 21.011719 12.320312 21.140625 12.125 21.140625 C 12.054688 21.140625 11.980469 21.089844 11.933594 21.011719 C 11.863281 20.890625 11.851562 20.890625 11.457031 20.921875 C 11.234375 20.9375 10.730469 20.957031 10.332031 20.976562 C 9.765625 21.003906 9.59375 21.023438 9.546875 21.085938 C 9.488281 21.152344 9.476562 21.136719 9.476562 21.007812 C 9.476562 20.804688 9.324219 20.726562 9.097656 20.808594 C 8.980469 20.851562 8.945312 20.890625 8.960938 20.953125 C 8.980469 21.023438 8.914062 21.039062 8.3125 21.070312 C 7.941406 21.085938 7.527344 21.105469 7.398438 21.113281 C 6.238281 21.210938 4.894531 21.242188 2.914062 21.226562 L 0.671875 21.207031 L 0.894531 21.441406 C 1.15625 21.722656 1.296875 21.777344 1.566406 21.710938 C 1.679688 21.6875 1.90625 21.671875 2.082031 21.679688 C 2.253906 21.695312 2.503906 21.710938 2.640625 21.714844 C 2.863281 21.722656 2.867188 21.726562 2.722656 21.757812 C 2.558594 21.796875 2.558594 21.796875 2.761719 21.804688 C 2.867188 21.804688 2.960938 21.789062 2.960938 21.757812 Z M 3.277344 21.109375 C 3.277344 21.042969 3.238281 21.035156 2.972656 21.0625 C 2.375 21.125 2.304688 21.175781 2.816406 21.179688 C 3.214844 21.1875 3.277344 21.175781 3.277344 21.109375 Z M 4.589844 21.113281 C 4.425781 21.054688 4.351562 21.0625 4.351562 21.144531 C 4.351562 21.164062 4.4375 21.1875 4.550781 21.179688 L 4.75 21.175781 Z M 5.257812 21.039062 C 5.257812 21.011719 5.222656 20.996094 5.1875 20.996094 C 5.148438 20.996094 5.070312 20.953125 5.019531 20.902344 C 4.964844 20.851562 4.914062 20.8125 4.894531 20.824219 C 4.882812 20.839844 4.941406 20.910156 5.023438 20.988281 C 5.164062 21.121094 5.257812 21.140625 5.257812 21.039062 Z M 15.542969 21.070312 C 15.578125 21.058594 15.417969 21.046875 15.214844 21.046875 C 14.996094 21.042969 14.820312 21.0625 14.820312 21.085938 C 14.820312 21.121094 15.417969 21.105469 15.542969 21.070312 Z M 6.988281 21.054688 C 6.917969 21.011719 6.847656 20.476562 6.886719 20.367188 C 6.910156 20.316406 6.964844 20.300781 7.035156 20.320312 C 7.152344 20.34375 7.152344 20.34375 7.0625 20.265625 C 6.992188 20.203125 6.945312 20.199219 6.871094 20.226562 C 6.789062 20.269531 6.78125 20.308594 6.8125 20.554688 C 6.835938 20.707031 6.851562 20.886719 6.851562 20.960938 C 6.859375 21.054688 6.886719 21.089844 6.957031 21.089844 C 7.011719 21.089844 7.027344 21.078125 6.988281 21.054688 Z M 12.25 21.035156 C 12.335938 20.953125 12.324219 20.734375 12.226562 20.660156 C 12.113281 20.578125 11.863281 20.65625 11.839844 20.785156 C 11.828125 20.871094 11.828125 20.871094 11.890625 20.800781 C 11.9375 20.753906 12.027344 20.710938 12.097656 20.703125 C 12.207031 20.691406 12.238281 20.710938 12.25 20.828125 C 12.261719 20.921875 12.238281 20.988281 12.171875 21.027344 C 12.121094 21.0625 12.101562 21.089844 12.125 21.089844 C 12.160156 21.089844 12.207031 21.070312 12.25 21.035156 Z M 18.148438 21.0625 C 18.253906 21.042969 18.347656 21.011719 18.347656 20.988281 C 18.347656 20.960938 18.300781 20.953125 18.242188 20.972656 C 18.191406 20.988281 17.984375 21.019531 17.804688 21.039062 C 17.492188 21.078125 17.488281 21.085938 17.703125 21.085938 C 17.839844 21.085938 18.039062 21.078125 18.148438 21.0625 Z M 16.34375 20.96875 C 16.492188 20.917969 16.339844 20.871094 16.121094 20.890625 C 15.953125 20.910156 15.941406 20.921875 16.023438 20.953125 C 16.164062 21.003906 16.234375 21.007812 16.34375 20.96875 Z M 19.128906 20.710938 C 19.140625 20.550781 19.132812 20.550781 19.109375 20.695312 C 19.097656 20.785156 19.050781 20.859375 19 20.871094 C 18.933594 20.886719 18.941406 20.890625 19.015625 20.886719 C 19.097656 20.875 19.121094 20.839844 19.128906 20.710938 Z M 20.078125 20.609375 C 20.035156 20.550781 19.632812 20.574219 19.632812 20.640625 C 19.632812 20.667969 19.726562 20.683594 19.871094 20.671875 C 20.007812 20.660156 20.09375 20.636719 20.078125 20.609375 Z M 7.648438 20.4375 C 7.539062 20.433594 7.355469 20.433594 7.25 20.4375 C 7.140625 20.449219 7.226562 20.457031 7.449219 20.457031 C 7.667969 20.457031 7.761719 20.449219 7.648438 20.4375 Z M 9.15625 20.410156 C 9.15625 20.371094 8.675781 20.417969 8.621094 20.457031 C 8.609375 20.46875 8.726562 20.472656 8.878906 20.460938 C 9.03125 20.453125 9.15625 20.433594 9.15625 20.410156 Z M 13.621094 20.375 C 13.636719 20.355469 13.613281 20.332031 13.574219 20.332031 C 13.460938 20.332031 13.402344 20.226562 13.492188 20.183594 C 13.550781 20.152344 13.542969 20.140625 13.472656 20.140625 C 13.363281 20.140625 13.34375 20.285156 13.445312 20.367188 C 13.519531 20.4375 13.578125 20.4375 13.621094 20.375 Z M 7.554688 20.273438 C 7.554688 20.222656 7.496094 20.203125 7.28125 20.167969 C 7.152344 20.152344 7.074219 20.152344 7.074219 20.183594 C 7.074219 20.214844 7.109375 20.222656 7.15625 20.207031 C 7.210938 20.1875 7.222656 20.199219 7.210938 20.242188 C 7.1875 20.292969 7.222656 20.308594 7.367188 20.308594 C 7.46875 20.304688 7.554688 20.292969 7.554688 20.273438 Z M 9.53125 20.28125 C 11.3125 20.257812 11.722656 20.242188 11.609375 20.1875 C 11.570312 20.167969 11.265625 20.164062 10.9375 20.183594 C 10.609375 20.199219 10.332031 20.191406 10.332031 20.171875 C 10.332031 20.152344 10.308594 20.152344 10.28125 20.164062 C 10.25 20.175781 9.640625 20.199219 8.914062 20.203125 C 8.195312 20.207031 7.609375 20.222656 7.609375 20.238281 C 7.609375 20.292969 7.679688 20.320312 7.8125 20.304688 C 7.890625 20.292969 8.667969 20.285156 9.53125 20.28125 Z M 12.367188 20.1875 C 12.367188 20.125 11.886719 20.125 11.773438 20.1875 C 11.714844 20.222656 11.792969 20.234375 12.03125 20.234375 C 12.21875 20.234375 12.367188 20.21875 12.367188 20.1875 Z M 11.375 20.070312 C 11.40625 20.058594 11.1875 20.054688 10.894531 20.054688 C 10.519531 20.058594 10.433594 20.070312 10.601562 20.085938 C 10.824219 20.117188 11.253906 20.105469 11.375 20.070312 Z M 13.273438 18.277344 C 13.273438 18.140625 13.261719 18.042969 13.25 18.054688 C 13.210938 18.09375 13.179688 18.523438 13.222656 18.523438 C 13.25 18.523438 13.273438 18.414062 13.273438 18.277344 Z M 13.308594 17.226562 C 13.296875 17.117188 13.285156 17.195312 13.285156 17.40625 C 13.285156 17.613281 13.296875 17.707031 13.308594 17.609375 C 13.320312 17.507812 13.320312 17.339844 13.308594 17.226562 Z M 13.328125 16.765625 C 13.328125 16.632812 13.308594 16.523438 13.285156 16.523438 C 13.25 16.523438 13.246094 16.621094 13.269531 16.941406 C 13.273438 16.972656 13.28125 17 13.296875 17 C 13.316406 17 13.328125 16.894531 13.328125 16.765625 Z M 12.976562 15.8125 C 12.992188 15.785156 13.039062 15.773438 13.074219 15.789062 C 13.121094 15.804688 13.140625 15.652344 13.132812 15.167969 C 13.132812 14.816406 13.152344 14.550781 13.175781 14.582031 C 13.210938 14.628906 13.222656 14.625 13.222656 14.566406 C 13.222656 14.527344 13.167969 14.480469 13.109375 14.464844 C 13.015625 14.441406 13.003906 14.464844 13 14.730469 C 12.988281 15.007812 12.988281 15.011719 12.953125 14.835938 C 12.917969 14.683594 12.917969 14.71875 12.917969 15.015625 C 12.917969 15.25 12.933594 15.382812 12.976562 15.382812 C 13.003906 15.382812 13 15.402344 12.957031 15.421875 C 12.910156 15.453125 12.894531 15.515625 12.917969 15.617188 C 12.933594 15.699219 12.921875 15.765625 12.898438 15.765625 C 12.863281 15.765625 12.847656 15.785156 12.847656 15.8125 C 12.847656 15.871094 12.933594 15.871094 12.976562 15.8125 Z M 13.257812 15.277344 C 13.246094 15.195312 13.234375 15.25 13.234375 15.410156 C 13.234375 15.5625 13.246094 15.632812 13.257812 15.5625 C 13.269531 15.488281 13.269531 15.363281 13.257812 15.277344 Z M 13.210938 14.363281 C 13.15625 14.332031 13.109375 14.242188 13.109375 14.15625 C 13.109375 14.054688 13.144531 14.003906 13.210938 13.988281 C 13.28125 13.972656 13.28125 13.964844 13.191406 13.960938 C 13.09375 13.957031 13.085938 13.925781 13.097656 13.476562 C 13.109375 13.21875 13.140625 13.003906 13.164062 13.003906 C 13.191406 13.003906 13.203125 13.117188 13.199219 13.242188 C 13.1875 13.375 13.199219 13.476562 13.222656 13.476562 C 13.246094 13.476562 13.339844 11.480469 13.402344 9.4375 C 13.421875 8.875 13.414062 8.917969 13.351562 9.742188 C 13.316406 10.265625 13.269531 11.160156 13.25 11.71875 C 13.222656 12.773438 13.203125 12.886719 13.082031 12.992188 C 13.023438 13.042969 13.003906 13.21875 13.003906 13.691406 C 13.003906 14.328125 13.039062 14.429688 13.222656 14.429688 C 13.285156 14.425781 13.28125 14.414062 13.210938 14.363281 Z M 13.273438 13.71875 C 13.273438 13.613281 13.257812 13.527344 13.226562 13.527344 C 13.210938 13.527344 13.191406 13.613281 13.191406 13.71875 C 13.191406 13.824219 13.210938 13.90625 13.226562 13.90625 C 13.257812 13.90625 13.273438 13.824219 13.273438 13.71875 Z M 13.257812 9.355469 C 13.246094 9.253906 13.234375 9.324219 13.234375 9.507812 C 13.234375 9.691406 13.246094 9.769531 13.257812 9.6875 C 13.269531 9.601562 13.269531 9.453125 13.257812 9.355469 Z M 13.296875 7.726562 C 13.296875 7.59375 13.28125 7.484375 13.261719 7.484375 C 13.210938 7.484375 13.203125 7.882812 13.257812 7.929688 C 13.273438 7.945312 13.292969 7.960938 13.292969 7.960938 C 13.296875 7.960938 13.296875 7.859375 13.296875 7.726562 Z M 13.363281 5.605469 C 13.363281 5.488281 13.339844 5.390625 13.316406 5.390625 C 13.285156 5.390625 13.28125 5.472656 13.292969 5.574219 C 13.308594 5.667969 13.320312 5.761719 13.328125 5.789062 C 13.328125 5.804688 13.339844 5.820312 13.34375 5.820312 C 13.355469 5.820312 13.363281 5.722656 13.363281 5.605469 Z M 13.308594 3.382812 C 13.296875 3.296875 13.285156 3.351562 13.285156 3.511719 C 13.285156 3.667969 13.296875 3.742188 13.308594 3.667969 C 13.320312 3.597656 13.320312 3.46875 13.308594 3.382812 Z M 13.308594 3.382812 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 1.023438 21.457031 L 0.839844 21.257812 L 3.519531 21.257812 C 5.46875 21.257812 6.554688 21.230469 7.550781 21.175781 L 8.910156 21.09375 L 9.007812 21.210938 C 9.148438 21.371094 9.335938 21.363281 9.511719 21.203125 C 9.648438 21.070312 9.652344 21.070312 10.726562 21.011719 L 11.804688 20.953125 L 11.898438 21.070312 C 12.050781 21.242188 12.300781 21.226562 12.378906 21.042969 L 12.4375 20.902344 L 13.117188 20.902344 C 13.484375 20.902344 13.976562 20.886719 14.207031 20.871094 L 14.621094 20.839844 L 14.585938 21.023438 C 14.5625 21.125 14.535156 21.222656 14.515625 21.230469 C 14.503906 21.246094 14.253906 21.261719 13.949219 21.273438 C 13.648438 21.28125 13.355469 21.304688 13.296875 21.328125 C 13.238281 21.355469 13.050781 21.378906 12.886719 21.390625 C 12.613281 21.40625 12.578125 21.394531 12.558594 21.308594 C 12.542969 21.222656 12.542969 21.222656 12.53125 21.320312 C 12.53125 21.386719 12.496094 21.425781 12.429688 21.425781 C 12.066406 21.425781 9.039062 21.574219 8.890625 21.59375 C 8.792969 21.609375 7.015625 21.632812 4.953125 21.640625 L 1.203125 21.65625 Z M 1.023438 21.457031 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 9.085938 21.191406 C 9.015625 21.125 9.007812 21.078125 9.050781 20.976562 C 9.097656 20.871094 9.132812 20.851562 9.25 20.867188 C 9.367188 20.871094 9.402344 20.910156 9.429688 21.027344 C 9.484375 21.273438 9.273438 21.371094 9.085938 21.191406 Z M 9.085938 21.191406 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 19.632812 22.5625 C 19.832031 22.449219 19.835938 22.449219 19.8125 22.558594 C 19.796875 22.609375 19.726562 22.636719 19.625 22.644531 L 19.460938 22.648438 Z M 19.632812 22.5625 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 22.613281 20.996094 C 22.625 20.929688 22.648438 20.902344 22.660156 20.9375 C 22.679688 20.972656 22.726562 20.976562 22.8125 20.945312 C 23.007812 20.878906 22.964844 20.960938 22.761719 21.042969 C 22.589844 21.121094 22.589844 21.121094 22.613281 20.996094 Z M 22.613281 20.996094 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 6.261719 20.996094 C 6.347656 20.960938 6.378906 20.910156 6.378906 20.800781 C 6.378906 20.710938 6.429688 20.585938 6.484375 20.523438 L 6.582031 20.40625 L 6.554688 20.535156 C 6.535156 20.636719 6.546875 20.660156 6.617188 20.660156 C 6.6875 20.660156 6.699219 20.675781 6.660156 20.726562 C 6.625 20.753906 6.59375 20.851562 6.578125 20.925781 C 6.554688 21.058594 6.554688 21.054688 6.546875 20.890625 C 6.546875 20.800781 6.519531 20.707031 6.488281 20.691406 C 6.472656 20.675781 6.460938 20.722656 6.476562 20.792969 C 6.5 20.925781 6.378906 21.050781 6.226562 21.039062 C 6.171875 21.039062 6.183594 21.019531 6.261719 20.996094 Z M 6.261719 20.996094 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 3.464844 20.804688 C 3.449219 20.777344 3.382812 20.769531 3.320312 20.789062 C 3.242188 20.804688 3.308594 20.726562 3.496094 20.574219 C 3.652344 20.4375 3.804688 20.332031 3.828125 20.332031 C 3.851562 20.332031 3.871094 20.292969 3.871094 20.257812 C 3.871094 20.222656 3.886719 20.1875 3.917969 20.1875 C 3.945312 20.1875 3.953125 20.109375 3.941406 20.019531 C 3.921875 19.929688 3.929688 19.8125 3.945312 19.769531 C 3.980469 19.699219 3.992188 19.703125 4.058594 19.804688 C 4.09375 19.871094 4.117188 19.9375 4.105469 19.957031 C 4.085938 19.980469 4.117188 19.984375 4.164062 19.964844 C 4.210938 19.949219 4.234375 19.921875 4.203125 19.90625 C 4.140625 19.863281 4.121094 19.664062 4.1875 19.664062 C 4.214844 19.664062 4.246094 19.6875 4.246094 19.714844 C 4.246094 19.738281 4.320312 19.757812 4.421875 19.757812 C 4.507812 19.757812 4.5625 19.78125 4.527344 19.796875 C 4.492188 19.816406 4.457031 19.898438 4.445312 19.972656 C 4.433594 20.066406 4.402344 20.109375 4.355469 20.101562 C 4.296875 20.089844 4.304688 20.109375 4.367188 20.207031 C 4.421875 20.273438 4.457031 20.355469 4.457031 20.386719 C 4.457031 20.421875 4.515625 20.507812 4.589844 20.578125 L 4.71875 20.707031 L 4.574219 20.726562 C 3.921875 20.851562 3.519531 20.875 3.464844 20.804688 Z M 3.464844 20.804688 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 20.066406 20.453125 C 20.03125 20.421875 20.042969 20.375 20.082031 20.34375 C 20.128906 20.304688 20.171875 20.300781 20.195312 20.332031 C 20.207031 20.355469 20.386719 20.386719 20.597656 20.40625 C 20.796875 20.425781 20.960938 20.449219 20.945312 20.457031 C 20.890625 20.507812 20.113281 20.507812 20.066406 20.453125 Z M 20.066406 20.453125 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 21.101562 20.375 C 21.121094 20.351562 21.160156 20.335938 21.195312 20.34375 C 21.230469 20.355469 21.300781 20.332031 21.355469 20.292969 C 21.4375 20.226562 21.476562 20.222656 21.628906 20.273438 C 21.722656 20.304688 21.886719 20.320312 21.988281 20.300781 C 22.109375 20.285156 22.140625 20.292969 22.085938 20.320312 C 21.964844 20.390625 21.054688 20.4375 21.101562 20.375 Z M 21.101562 20.375 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 14.492188 20.019531 C 14.480469 19.902344 14.492188 19.800781 14.511719 19.796875 C 14.550781 19.785156 14.574219 19.578125 14.5625 19.347656 C 14.550781 19.136719 14.445312 19.148438 14.445312 19.355469 L 14.445312 19.519531 L 14.117188 19.515625 C 13.929688 19.511719 13.824219 19.503906 13.878906 19.488281 C 13.929688 19.472656 13.964844 19.421875 13.964844 19.351562 C 13.964844 19.28125 14 19.234375 14.046875 19.234375 C 14.175781 19.234375 15.019531 19.003906 15.207031 18.925781 C 15.628906 18.730469 16.328125 18.148438 16.691406 17.691406 C 16.765625 17.59375 16.878906 17.460938 16.941406 17.390625 C 17.011719 17.320312 17.066406 17.246094 17.066406 17.226562 C 17.066406 17.160156 17.453125 16.621094 17.480469 16.636719 C 17.503906 16.648438 17.523438 16.59375 17.523438 16.519531 C 17.527344 16.359375 17.464844 16.335938 17.421875 16.476562 C 17.40625 16.53125 17.253906 16.785156 17.082031 17.050781 C 16.84375 17.421875 16.75 17.511719 16.679688 17.492188 C 16.625 17.480469 16.585938 17.492188 16.585938 17.523438 C 16.585938 17.554688 16.613281 17.5625 16.636719 17.546875 C 16.714844 17.503906 16.703125 17.578125 16.613281 17.6875 C 16.574219 17.730469 16.515625 17.757812 16.492188 17.742188 C 16.457031 17.726562 16.445312 17.753906 16.457031 17.796875 C 16.472656 17.855469 16.421875 17.9375 16.308594 18.023438 C 16.191406 18.125 16.152344 18.140625 16.175781 18.078125 C 16.191406 18.027344 16.191406 18 16.152344 18.023438 C 16.121094 18.042969 16.109375 18.082031 16.128906 18.117188 C 16.132812 18.148438 16.039062 18.273438 15.910156 18.382812 C 15.660156 18.601562 15.652344 18.597656 15.722656 18.324219 C 15.753906 18.222656 15.753906 18.140625 15.722656 18.140625 C 15.707031 18.140625 15.664062 18.25 15.648438 18.382812 C 15.613281 18.597656 15.582031 18.640625 15.394531 18.746094 C 15.277344 18.8125 15.03125 18.914062 14.851562 18.976562 L 14.515625 19.078125 L 14.421875 17.957031 C 14.347656 17.109375 14.316406 16.289062 14.3125 14.625 C 14.304688 12.332031 14.246094 11.066406 14.046875 9.082031 L 14.023438 8.839844 L 14.160156 9.152344 C 14.230469 9.316406 14.277344 9.484375 14.257812 9.523438 C 14.253906 9.554688 14.257812 9.570312 14.289062 9.554688 C 14.339844 9.523438 14.550781 9.90625 14.550781 10.027344 C 14.550781 10.070312 14.574219 10.109375 14.609375 10.125 C 14.691406 10.171875 14.550781 8.863281 14.289062 7.082031 C 14.195312 6.507812 14.128906 6.003906 14.128906 5.960938 C 14.128906 5.839844 14.328125 6.175781 14.957031 7.347656 C 15.285156 7.976562 15.765625 8.832031 16.027344 9.257812 C 16.285156 9.679688 16.578125 10.171875 16.671875 10.339844 C 16.925781 10.757812 17.492188 11.679688 17.878906 12.28125 C 18.050781 12.550781 18.191406 12.785156 18.191406 12.800781 C 18.191406 12.824219 18.476562 13.261719 18.953125 13.976562 C 19.058594 14.132812 19.199219 14.347656 19.261719 14.457031 C 19.328125 14.558594 19.472656 14.78125 19.597656 14.953125 C 19.726562 15.125 19.988281 15.511719 20.195312 15.8125 C 20.609375 16.4375 21.226562 17.292969 21.96875 18.277344 C 22.644531 19.152344 22.832031 19.433594 22.835938 19.535156 C 22.835938 19.613281 22.824219 19.613281 22.679688 19.546875 C 22.589844 19.503906 22.515625 19.449219 22.515625 19.429688 C 22.515625 19.34375 22.257812 19.230469 22.027344 19.21875 C 21.875 19.210938 21.414062 19.054688 20.699219 18.777344 C 19.34375 18.234375 18.367188 17.875 18.191406 17.839844 L 18.054688 17.804688 L 18.179688 17.882812 C 18.242188 17.925781 18.296875 17.996094 18.289062 18.042969 C 18.289062 18.109375 18.285156 18.109375 18.253906 18.039062 C 18.226562 17.980469 18.191406 17.972656 18.136719 17.996094 C 18.039062 18.054688 18.109375 18.195312 18.214844 18.160156 C 18.273438 18.140625 18.296875 18.164062 18.296875 18.257812 C 18.296875 18.324219 18.320312 18.378906 18.347656 18.378906 C 18.378906 18.378906 18.402344 18.425781 18.402344 18.476562 C 18.402344 18.53125 18.4375 18.644531 18.488281 18.71875 C 18.535156 18.800781 18.558594 18.910156 18.546875 18.953125 C 18.53125 19.003906 18.535156 19.035156 18.558594 19.019531 C 18.601562 19 18.882812 19.453125 18.882812 19.535156 C 18.882812 19.554688 18.3125 19.570312 17.617188 19.570312 C 16.1875 19.578125 16.316406 19.578125 15.78125 19.554688 C 15.554688 19.546875 15.347656 19.554688 15.3125 19.582031 C 15.261719 19.621094 15.226562 19.617188 15.195312 19.578125 C 15.167969 19.53125 15.144531 19.523438 15.121094 19.566406 C 15.097656 19.589844 14.980469 19.617188 14.855469 19.617188 C 14.621094 19.617188 14.617188 19.617188 14.585938 19.804688 C 14.570312 19.914062 14.570312 20.054688 14.585938 20.117188 C 14.605469 20.183594 14.597656 20.234375 14.5625 20.234375 C 14.539062 20.234375 14.5 20.140625 14.492188 20.019531 Z M 18.289062 19.132812 C 18.296875 19.03125 18.273438 18.949219 18.242188 18.949219 C 18.207031 18.949219 18.191406 19.078125 18.191406 19.25 C 18.195312 19.46875 18.207031 19.515625 18.242188 19.429688 C 18.261719 19.363281 18.285156 19.226562 18.289062 19.132812 Z M 15.355469 19.238281 C 15.355469 19.144531 15.273438 19.230469 15.226562 19.378906 C 15.191406 19.496094 15.195312 19.496094 15.273438 19.40625 C 15.320312 19.355469 15.355469 19.28125 15.355469 19.238281 Z M 15.980469 19.234375 C 16.015625 19.117188 16.046875 18.992188 16.035156 18.949219 C 16.023438 18.914062 16 18.945312 15.976562 19.019531 C 15.953125 19.101562 15.898438 19.230469 15.859375 19.304688 C 15.792969 19.429688 15.78125 19.433594 15.816406 19.332031 C 15.894531 19.035156 15.921875 18.800781 15.882812 18.78125 C 15.8125 18.742188 15.765625 18.886719 15.804688 19.035156 C 15.828125 19.121094 15.828125 19.144531 15.789062 19.097656 C 15.753906 19.046875 15.734375 19.050781 15.710938 19.121094 C 15.695312 19.199219 15.648438 18.898438 15.671875 18.796875 C 15.671875 18.777344 15.652344 18.761719 15.625 18.761719 C 15.59375 18.761719 15.558594 18.816406 15.535156 18.894531 C 15.523438 18.964844 15.496094 19.050781 15.484375 19.082031 C 15.472656 19.121094 15.5 19.179688 15.542969 19.21875 C 15.582031 19.261719 15.625 19.269531 15.625 19.246094 C 15.625 19.21875 15.660156 19.203125 15.707031 19.203125 C 15.800781 19.203125 15.800781 19.199219 15.730469 19.355469 C 15.683594 19.46875 15.6875 19.480469 15.792969 19.464844 C 15.886719 19.453125 15.929688 19.398438 15.980469 19.234375 Z M 17.3125 19.019531 C 17.300781 18.746094 17.3125 18.664062 17.363281 18.664062 C 17.40625 18.664062 17.441406 18.644531 17.441406 18.617188 C 17.441406 18.5625 17.386719 18.558594 17.292969 18.609375 C 17.257812 18.628906 17.242188 18.75 17.253906 18.929688 C 17.269531 19.332031 17.277344 19.378906 17.304688 19.378906 C 17.316406 19.378906 17.324219 19.21875 17.3125 19.019531 Z M 17.421875 18.867188 C 17.410156 18.769531 17.40625 18.851562 17.40625 19.046875 C 17.40625 19.238281 17.410156 19.320312 17.421875 19.226562 C 17.433594 19.128906 17.433594 18.964844 17.421875 18.867188 Z M 18.132812 19.328125 C 18.132812 19.300781 18.085938 19.285156 18.027344 19.285156 C 17.949219 19.285156 17.921875 19.25 17.921875 19.164062 C 17.921875 19.078125 17.949219 19.046875 18.027344 19.046875 C 18.085938 19.046875 18.132812 19.027344 18.132812 19 C 18.132812 18.9375 17.972656 18.933594 17.878906 18.996094 C 17.820312 19.027344 17.828125 19.21875 17.898438 19.332031 C 17.925781 19.378906 18.132812 19.371094 18.132812 19.328125 Z M 16.765625 18.609375 C 16.75 18.585938 16.796875 18.574219 16.859375 18.566406 C 16.984375 18.5625 16.984375 18.5625 16.855469 18.527344 C 16.726562 18.496094 16.726562 18.492188 16.894531 18.464844 C 17.011719 18.449219 17.101562 18.464844 17.152344 18.511719 C 17.195312 18.550781 17.246094 18.566406 17.269531 18.546875 C 17.289062 18.527344 17.277344 18.5 17.234375 18.492188 C 17.207031 18.476562 17.183594 18.445312 17.199219 18.425781 C 17.222656 18.398438 17.199219 18.394531 17.160156 18.410156 C 17.113281 18.425781 17.058594 18.414062 17.042969 18.382812 C 17.023438 18.359375 16.953125 18.332031 16.890625 18.339844 C 16.785156 18.34375 16.785156 18.347656 16.90625 18.378906 L 17.042969 18.417969 L 16.894531 18.425781 C 16.761719 18.429688 16.742188 18.410156 16.742188 18.28125 C 16.742188 18.15625 16.761719 18.140625 16.871094 18.171875 C 16.972656 18.191406 17.019531 18.175781 17.054688 18.109375 C 17.117188 18 17.09375 17.84375 17.007812 17.8125 C 16.964844 17.804688 16.972656 17.78125 17.019531 17.753906 C 17.082031 17.710938 17.082031 17.710938 17.019531 17.722656 C 16.9375 17.742188 16.890625 17.949219 16.964844 17.949219 C 16.984375 17.949219 16.996094 17.992188 16.988281 18.039062 C 16.976562 18.09375 16.9375 18.113281 16.847656 18.105469 C 16.671875 18.078125 16.644531 18.046875 16.789062 18.046875 C 16.972656 18.046875 16.917969 17.882812 16.738281 17.875 C 16.601562 17.863281 16.613281 17.898438 16.761719 17.949219 L 16.878906 17.996094 L 16.761719 17.996094 C 16.65625 17.996094 16.648438 18.015625 16.671875 18.324219 C 16.707031 18.746094 16.707031 18.699219 16.671875 19.019531 L 16.636719 19.304688 L 16.71875 18.980469 C 16.761719 18.796875 16.785156 18.632812 16.765625 18.609375 Z M 18.132812 19.164062 C 18.132812 19.128906 18.097656 19.09375 18.054688 19.09375 C 18.007812 19.09375 17.972656 19.128906 17.972656 19.164062 C 17.972656 19.203125 18.007812 19.234375 18.054688 19.234375 C 18.097656 19.234375 18.132812 19.203125 18.132812 19.164062 Z M 14.664062 18.910156 C 14.757812 19.035156 14.785156 18.898438 14.691406 18.746094 C 14.628906 18.640625 14.617188 18.625 14.628906 18.699219 C 14.640625 18.761719 14.628906 18.820312 14.605469 18.835938 C 14.574219 18.851562 14.558594 18.898438 14.558594 18.9375 C 14.5625 19.003906 14.570312 19.003906 14.59375 18.929688 C 14.617188 18.859375 14.628906 18.859375 14.664062 18.910156 Z M 17.945312 18.585938 C 17.921875 18.496094 17.933594 18.429688 17.960938 18.429688 C 17.992188 18.429688 18.007812 18.535156 18.007812 18.664062 C 18.003906 18.828125 18.015625 18.902344 18.066406 18.902344 C 18.109375 18.902344 18.125 18.851562 18.109375 18.75 C 18.066406 18.445312 18.042969 18.40625 17.921875 18.378906 C 17.84375 18.363281 17.792969 18.3125 17.773438 18.246094 C 17.769531 18.171875 17.78125 18.144531 17.828125 18.171875 C 17.863281 18.191406 17.867188 18.183594 17.84375 18.148438 C 17.78125 18.058594 17.703125 18.089844 17.703125 18.210938 C 17.703125 18.289062 17.675781 18.332031 17.621094 18.332031 C 17.550781 18.332031 17.546875 18.316406 17.597656 18.261719 C 17.632812 18.222656 17.644531 18.171875 17.632812 18.144531 C 17.609375 18.125 17.628906 18.082031 17.65625 18.066406 C 17.703125 18.042969 17.699219 18.011719 17.628906 17.972656 C 17.539062 17.914062 17.535156 17.90625 17.617188 17.875 C 17.667969 17.859375 17.703125 17.824219 17.703125 17.792969 C 17.703125 17.773438 17.65625 17.78125 17.597656 17.832031 C 17.539062 17.878906 17.511719 17.9375 17.523438 17.957031 C 17.539062 17.980469 17.515625 18.011719 17.46875 18.027344 C 17.421875 18.042969 17.40625 18.078125 17.417969 18.105469 C 17.441406 18.140625 17.46875 18.125 17.503906 18.074219 C 17.527344 18.03125 17.582031 17.996094 17.609375 17.996094 C 17.65625 17.996094 17.65625 18.011719 17.617188 18.054688 C 17.585938 18.078125 17.570312 18.140625 17.585938 18.179688 C 17.609375 18.230469 17.59375 18.246094 17.523438 18.222656 C 17.46875 18.207031 17.445312 18.210938 17.464844 18.238281 C 17.480469 18.265625 17.464844 18.28125 17.429688 18.28125 C 17.386719 18.28125 17.40625 18.308594 17.457031 18.339844 C 17.511719 18.363281 17.59375 18.378906 17.644531 18.363281 C 17.738281 18.347656 17.867188 18.429688 17.867188 18.523438 C 17.867188 18.546875 17.828125 18.574219 17.785156 18.574219 C 17.746094 18.574219 17.703125 18.535156 17.703125 18.496094 C 17.703125 18.429688 17.667969 18.425781 17.535156 18.445312 C 17.429688 18.460938 17.386719 18.460938 17.429688 18.429688 C 17.488281 18.398438 17.480469 18.390625 17.410156 18.363281 C 17.347656 18.34375 17.339844 18.3125 17.382812 18.242188 C 17.410156 18.195312 17.417969 18.140625 17.398438 18.121094 C 17.375 18.105469 17.359375 18.066406 17.359375 18.058594 C 17.351562 18.039062 17.328125 17.976562 17.289062 17.921875 C 17.21875 17.792969 17.292969 17.722656 17.410156 17.808594 C 17.46875 17.855469 17.492188 17.855469 17.492188 17.8125 C 17.492188 17.78125 17.464844 17.761719 17.429688 17.761719 C 17.382812 17.761719 17.382812 17.746094 17.429688 17.707031 C 17.476562 17.660156 17.476562 17.636719 17.421875 17.574219 C 17.371094 17.519531 17.375 17.507812 17.464844 17.539062 C 17.574219 17.570312 17.574219 17.570312 17.46875 17.496094 C 17.410156 17.460938 17.386719 17.425781 17.417969 17.425781 C 17.445312 17.425781 17.40625 17.386719 17.335938 17.335938 C 17.195312 17.234375 17.09375 17.207031 17.140625 17.277344 C 17.160156 17.304688 17.140625 17.339844 17.105469 17.351562 C 17.070312 17.363281 17.101562 17.363281 17.164062 17.351562 C 17.253906 17.335938 17.28125 17.34375 17.257812 17.375 C 17.230469 17.410156 17.253906 17.417969 17.3125 17.394531 C 17.375 17.375 17.394531 17.378906 17.363281 17.421875 C 17.339844 17.457031 17.277344 17.476562 17.222656 17.460938 C 17.113281 17.4375 17.101562 17.46875 17.152344 17.589844 C 17.164062 17.636719 17.210938 17.652344 17.234375 17.640625 C 17.269531 17.621094 17.265625 17.589844 17.222656 17.570312 C 17.160156 17.535156 17.160156 17.523438 17.230469 17.523438 C 17.28125 17.523438 17.347656 17.558594 17.386719 17.59375 C 17.441406 17.652344 17.429688 17.695312 17.371094 17.65625 C 17.359375 17.644531 17.3125 17.679688 17.265625 17.722656 C 17.164062 17.804688 17.160156 17.90625 17.246094 17.957031 C 17.269531 17.976562 17.289062 18.074219 17.289062 18.183594 C 17.289062 18.289062 17.304688 18.378906 17.335938 18.378906 C 17.359375 18.378906 17.371094 18.414062 17.347656 18.460938 C 17.324219 18.527344 17.339844 18.53125 17.480469 18.507812 C 17.621094 18.484375 17.652344 18.496094 17.6875 18.578125 C 17.703125 18.644531 17.691406 18.695312 17.644531 18.714844 C 17.585938 18.75 17.59375 18.761719 17.667969 18.761719 C 17.714844 18.761719 17.761719 18.726562 17.761719 18.683594 C 17.761719 18.59375 17.878906 18.617188 17.910156 18.714844 C 17.925781 18.769531 17.921875 18.769531 17.875 18.714844 C 17.828125 18.652344 17.816406 18.667969 17.832031 18.785156 C 17.867188 18.984375 17.867188 18.992188 17.925781 18.859375 C 17.949219 18.796875 17.960938 18.675781 17.945312 18.589844 Z M 18.453125 18.902344 C 18.453125 18.878906 18.417969 18.875 18.367188 18.886719 C 18.308594 18.910156 18.289062 18.902344 18.3125 18.863281 C 18.335938 18.832031 18.320312 18.808594 18.273438 18.808594 C 18.171875 18.808594 18.160156 18.882812 18.253906 18.917969 C 18.371094 18.960938 18.453125 18.953125 18.453125 18.902344 Z M 14.832031 18.53125 C 14.855469 18.359375 14.832031 18.28125 14.734375 18.28125 C 14.652344 18.28125 14.644531 18.308594 14.691406 18.515625 C 14.734375 18.703125 14.796875 18.710938 14.832031 18.53125 Z M 17.222656 18.28125 C 17.222656 18.25 17.1875 18.242188 17.136719 18.261719 C 17.054688 18.28125 17.046875 18.28125 17.105469 18.230469 C 17.210938 18.140625 17.183594 18.066406 17.078125 18.15625 C 17.023438 18.207031 16.929688 18.242188 16.871094 18.242188 C 16.808594 18.246094 16.835938 18.261719 16.929688 18.28125 C 17.171875 18.339844 17.222656 18.339844 17.222656 18.28125 Z M 16 18.011719 C 16 17.890625 15.988281 17.804688 15.96875 17.820312 C 15.921875 17.855469 15.910156 18.28125 15.953125 18.257812 C 15.980469 18.242188 16 18.132812 16 18.011719 Z M 14.898438 18.082031 C 14.972656 17.65625 14.980469 17.527344 14.9375 17.503906 C 14.914062 17.492188 14.890625 17.539062 14.890625 17.609375 C 14.890625 17.679688 14.875 17.824219 14.851562 17.925781 C 14.816406 18.082031 14.796875 18.105469 14.769531 18.023438 C 14.726562 17.9375 14.722656 17.941406 14.722656 18.054688 C 14.710938 18.28125 14.855469 18.308594 14.898438 18.082031 Z M 15.839844 17.910156 C 15.871094 17.945312 15.886719 17.949219 15.886719 17.925781 C 15.886719 17.898438 15.851562 17.832031 15.8125 17.78125 C 15.742188 17.695312 15.734375 17.707031 15.742188 17.90625 C 15.746094 18.058594 15.753906 18.078125 15.765625 17.980469 C 15.789062 17.875 15.804688 17.855469 15.839844 17.910156 Z M 16.835938 17.777344 C 16.808594 17.730469 16.929688 17.613281 16.996094 17.625 C 17.019531 17.625 17.042969 17.597656 17.054688 17.570312 C 17.089844 17.492188 16.90625 17.578125 16.777344 17.710938 C 16.683594 17.796875 16.679688 17.808594 16.765625 17.808594 C 16.8125 17.808594 16.847656 17.792969 16.835938 17.777344 Z M 15.648438 15.0625 C 15.601562 14.828125 15.558594 14.902344 15.601562 15.148438 C 15.625 15.265625 15.648438 15.332031 15.664062 15.296875 C 15.675781 15.265625 15.671875 15.160156 15.648438 15.0625 Z M 15.648438 15.0625 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 13.109375 19.855469 C 13.109375 19.75 13.09375 19.664062 13.058594 19.664062 C 12.957031 19.664062 13.003906 19.53125 13.109375 19.503906 C 13.210938 19.484375 13.222656 19.503906 13.222656 19.765625 C 13.222656 19.921875 13.199219 20.046875 13.164062 20.046875 C 13.140625 20.046875 13.109375 19.957031 13.109375 19.855469 Z M 13.109375 19.855469 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 13.703125 19.734375 L 13.703125 19.539062 L 14.066406 19.5625 C 14.539062 19.582031 14.605469 19.648438 14.140625 19.648438 C 13.785156 19.640625 13.777344 19.640625 13.75 19.785156 C 13.714844 19.917969 13.707031 19.914062 13.703125 19.734375 Z M 13.703125 19.734375 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 11.5625 19.703125 C 11.5625 19.65625 11.585938 19.617188 11.621094 19.605469 C 11.652344 19.597656 11.691406 19.488281 11.703125 19.363281 C 11.722656 19.238281 11.757812 19.128906 11.78125 19.113281 C 11.851562 19.070312 11.804688 19.613281 11.726562 19.679688 C 11.699219 19.707031 11.667969 19.714844 11.667969 19.6875 C 11.667969 19.65625 11.644531 19.671875 11.617188 19.714844 C 11.574219 19.773438 11.5625 19.773438 11.5625 19.703125 Z M 11.5625 19.703125 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 12.417969 19.414062 C 12.417969 19.335938 12.453125 19.269531 12.496094 19.25 C 12.628906 19.210938 12.636719 19.25 12.523438 19.402344 L 12.417969 19.546875 Z M 12.417969 19.414062 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 13.703125 19.378906 C 13.703125 19.328125 13.707031 19.285156 13.71875 19.285156 C 13.730469 19.285156 13.777344 19.269531 13.824219 19.253906 C 13.953125 19.214844 13.9375 19.363281 13.808594 19.429688 C 13.714844 19.46875 13.703125 19.464844 13.703125 19.378906 Z M 13.703125 19.378906 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 14.019531 19.121094 C 14.019531 19.09375 14.058594 18.726562 14.101562 18.308594 C 14.140625 17.890625 14.183594 17.402344 14.1875 17.210938 C 14.1875 16.953125 14.199219 16.910156 14.234375 17.023438 C 14.289062 17.1875 14.457031 19.054688 14.429688 19.082031 C 14.410156 19.09375 14.3125 19.117188 14.210938 19.144531 C 14.078125 19.164062 14.019531 19.160156 14.019531 19.121094 Z M 14.019531 19.121094 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 12.859375 18.984375 C 12.859375 18.882812 12.886719 18.808594 12.910156 18.808594 C 12.96875 18.808594 12.964844 19 12.90625 19.085938 C 12.871094 19.136719 12.859375 19.097656 12.859375 18.984375 Z M 12.859375 18.984375 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 11.960938 18.9375 C 11.785156 18.917969 11.582031 18.910156 11.5 18.917969 C 11.417969 18.929688 11.363281 18.917969 11.382812 18.894531 C 11.398438 18.875 11.3125 18.859375 11.195312 18.859375 C 10.960938 18.859375 10.90625 18.78125 11.054688 18.644531 C 11.171875 18.542969 11.152344 18.464844 11.03125 18.558594 C 10.972656 18.601562 10.917969 18.679688 10.917969 18.726562 C 10.917969 18.796875 10.894531 18.808594 10.75 18.78125 C 10.65625 18.765625 10.492188 18.75 10.386719 18.75 C 10.257812 18.757812 10.226562 18.742188 10.28125 18.714844 C 10.332031 18.683594 10.308594 18.667969 10.175781 18.667969 C 10.070312 18.667969 9.917969 18.652344 9.824219 18.640625 C 9.742188 18.625 9.523438 18.597656 9.359375 18.585938 C 9.191406 18.578125 8.792969 18.542969 8.480469 18.5 C 8.160156 18.460938 7.648438 18.394531 7.34375 18.359375 C 7.039062 18.316406 6.722656 18.28125 6.640625 18.277344 C 6.476562 18.265625 6.4375 18.191406 6.554688 18.105469 C 6.59375 18.074219 6.625 17.996094 6.628906 17.921875 C 6.628906 17.847656 6.625 17.824219 6.613281 17.871094 C 6.601562 17.914062 6.535156 17.949219 6.472656 17.957031 C 6.367188 17.960938 6.367188 17.964844 6.488281 17.996094 C 6.566406 18.011719 6.59375 18.042969 6.554688 18.0625 C 6.523438 18.078125 6.453125 18.078125 6.394531 18.066406 C 6.3125 18.042969 6.3125 18.046875 6.378906 18.089844 C 6.429688 18.125 6.441406 18.148438 6.402344 18.191406 C 6.367188 18.222656 6.191406 18.214844 5.816406 18.164062 C 5.523438 18.125 5.035156 18.0625 4.726562 18.023438 C 4.414062 17.992188 3.910156 17.925781 3.601562 17.882812 C 3.289062 17.847656 2.921875 17.796875 2.773438 17.78125 C 2.523438 17.761719 2.125 17.710938 2.042969 17.6875 C 2.011719 17.679688 1.9375 17.675781 1.855469 17.671875 C 1.714844 17.664062 1.714844 17.660156 1.917969 17.570312 C 2.035156 17.519531 2.160156 17.476562 2.195312 17.476562 C 2.234375 17.476562 2.265625 17.453125 2.265625 17.421875 C 2.265625 17.402344 2.246094 17.390625 2.210938 17.40625 C 2.183594 17.421875 2.160156 17.421875 2.160156 17.394531 C 2.164062 17.304688 2.3125 17.207031 2.585938 17.125 C 2.9375 17.007812 4.410156 16.40625 4.855469 16.1875 C 5.035156 16.101562 5.40625 15.914062 5.6875 15.769531 C 5.960938 15.628906 6.25 15.484375 6.324219 15.449219 C 6.402344 15.414062 6.582031 15.269531 6.730469 15.136719 L 6.992188 14.894531 L 6.671875 15.128906 C 6.496094 15.265625 6.160156 15.476562 5.925781 15.597656 C 5.480469 15.835938 3.769531 16.621094 3.308594 16.792969 C 2.785156 16.992188 2.359375 17.140625 2.335938 17.128906 C 2.316406 17.109375 2.480469 16.757812 3.039062 15.570312 C 3.367188 14.882812 3.886719 13.71875 4.367188 12.648438 C 4.527344 12.28125 4.761719 11.753906 4.882812 11.480469 C 5.007812 11.203125 5.253906 10.628906 5.429688 10.195312 C 5.605469 9.761719 5.78125 9.351562 5.820312 9.269531 C 5.855469 9.191406 5.914062 9.050781 5.949219 8.957031 C 5.992188 8.871094 6.207031 8.3125 6.441406 7.726562 C 6.96875 6.398438 7.902344 3.914062 8.410156 2.488281 C 9.03125 0.746094 9.0625 0.664062 9.148438 0.605469 C 9.21875 0.554688 9.21875 0.535156 9.136719 0.378906 C 9.074219 0.25 9.054688 0.167969 9.089844 0.078125 C 9.136719 -0.0390625 9.144531 -0.0390625 9.238281 0.1875 C 9.289062 0.316406 9.464844 0.695312 9.628906 1.03125 C 9.824219 1.453125 9.898438 1.65625 9.863281 1.691406 C 9.824219 1.722656 9.769531 1.683594 9.699219 1.550781 C 9.570312 1.324219 9.558594 1.28125 9.640625 1.332031 C 9.707031 1.359375 9.664062 1.1875 9.578125 1.0625 C 9.535156 1.007812 9.53125 1.03125 9.558594 1.125 C 9.578125 1.199219 9.570312 1.253906 9.542969 1.253906 C 9.523438 1.253906 9.5 1.214844 9.496094 1.171875 C 9.484375 1.039062 9.265625 0.632812 9.214844 0.632812 C 9.136719 0.632812 9.144531 0.652344 9.261719 0.835938 C 9.394531 1.039062 9.460938 1.230469 9.378906 1.1875 C 9.335938 1.167969 9.332031 1.183594 9.347656 1.222656 C 9.367188 1.269531 9.402344 1.289062 9.4375 1.285156 C 9.460938 1.28125 9.523438 1.367188 9.578125 1.472656 C 9.707031 1.75 9.792969 1.839844 9.886719 1.769531 C 9.945312 1.726562 9.96875 1.742188 10.003906 1.835938 C 10.035156 1.894531 10.050781 2 10.039062 2.0625 C 10.035156 2.128906 10.039062 2.140625 10.050781 2.09375 C 10.0625 2.054688 10.09375 2.023438 10.121094 2.039062 C 10.144531 2.054688 10.15625 2.09375 10.140625 2.128906 C 10.121094 2.175781 10.144531 2.21875 10.199219 2.234375 C 10.25 2.253906 10.273438 2.292969 10.257812 2.328125 C 10.246094 2.363281 10.257812 2.390625 10.296875 2.378906 C 10.332031 2.375 10.363281 2.421875 10.367188 2.488281 C 10.367188 2.558594 10.398438 2.671875 10.433594 2.742188 C 10.46875 2.820312 10.492188 2.898438 10.492188 2.921875 C 10.492188 2.949219 10.519531 2.957031 10.550781 2.941406 C 10.578125 2.925781 10.601562 2.960938 10.601562 3.027344 C 10.601562 3.089844 10.660156 3.242188 10.730469 3.367188 C 10.800781 3.496094 10.855469 3.617188 10.835938 3.640625 C 10.820312 3.660156 10.835938 3.679688 10.859375 3.679688 C 10.894531 3.679688 10.917969 3.710938 10.917969 3.75 C 10.917969 3.785156 10.976562 3.929688 11.046875 4.066406 C 11.125 4.210938 11.199219 4.382812 11.21875 4.453125 C 11.234375 4.523438 11.277344 4.570312 11.300781 4.554688 C 11.328125 4.539062 11.347656 4.550781 11.347656 4.578125 C 11.347656 4.601562 11.316406 4.636719 11.28125 4.640625 C 11.230469 4.664062 11.230469 4.671875 11.28125 4.671875 C 11.324219 4.679688 11.339844 4.703125 11.324219 4.722656 C 11.304688 4.753906 11.328125 4.773438 11.375 4.773438 C 11.421875 4.773438 11.445312 4.796875 11.429688 4.820312 C 11.410156 4.847656 11.351562 4.867188 11.300781 4.867188 C 11.21875 4.867188 11.195312 4.816406 11.160156 4.640625 C 11.105469 4.328125 11.035156 4.171875 10.964844 4.238281 C 10.925781 4.277344 10.949219 4.386719 11.054688 4.640625 C 11.136719 4.832031 11.210938 4.992188 11.21875 5.003906 C 11.21875 5.003906 11.316406 4.980469 11.429688 4.9375 C 11.691406 4.839844 11.734375 4.875 11.476562 4.988281 C 11.316406 5.054688 11.289062 5.085938 11.324219 5.167969 C 11.339844 5.222656 11.375 5.339844 11.398438 5.417969 C 11.421875 5.527344 11.441406 5.539062 11.46875 5.472656 C 11.488281 5.433594 11.480469 5.335938 11.453125 5.265625 C 11.417969 5.183594 11.417969 5.121094 11.453125 5.089844 C 11.523438 5.03125 11.585938 5.167969 11.539062 5.273438 C 11.523438 5.320312 11.546875 5.34375 11.605469 5.34375 C 11.6875 5.351562 11.6875 5.355469 11.617188 5.40625 C 11.523438 5.476562 11.523438 5.550781 11.617188 5.792969 C 11.65625 5.902344 11.6875 6.011719 11.675781 6.054688 C 11.667969 6.085938 11.6875 6.101562 11.714844 6.085938 C 11.769531 6.054688 11.992188 6.515625 11.996094 6.691406 L 11.996094 6.796875 L 12.042969 6.695312 C 12.097656 6.578125 12.191406 6.507812 12.25 6.558594 C 12.265625 6.574219 12.242188 6.609375 12.191406 6.632812 C 12.066406 6.695312 12.066406 6.746094 12.230469 7.046875 C 12.367188 7.308594 12.472656 7.367188 12.476562 7.191406 C 12.476562 7.101562 12.496094 7.125 12.558594 7.261719 C 12.625 7.394531 12.660156 7.429688 12.695312 7.378906 C 12.722656 7.34375 12.730469 7.367188 12.707031 7.445312 C 12.683594 7.535156 12.699219 7.601562 12.757812 7.652344 C 12.804688 7.695312 12.847656 7.765625 12.847656 7.804688 C 12.847656 7.851562 12.894531 8.003906 12.953125 8.144531 C 13.074219 8.429688 13.085938 8.5625 12.992188 8.605469 C 12.953125 8.632812 12.945312 8.617188 12.96875 8.566406 C 12.980469 8.519531 12.976562 8.484375 12.953125 8.484375 C 12.894531 8.484375 12.882812 8.589844 12.933594 8.640625 C 12.976562 8.679688 12.988281 8.804688 13.027344 9.472656 C 13.039062 9.742188 13.0625 9.976562 13.085938 10.003906 C 13.097656 10.027344 13.097656 10.058594 13.070312 10.070312 C 13.046875 10.085938 13.023438 10.332031 13.015625 10.632812 C 13.003906 10.957031 12.976562 11.199219 12.933594 11.242188 C 12.894531 11.28125 12.894531 11.316406 12.921875 11.320312 C 12.988281 11.34375 12.882812 13.277344 12.628906 16.765625 C 12.601562 17.167969 12.558594 17.804688 12.542969 18.179688 C 12.519531 18.625 12.488281 18.859375 12.449219 18.859375 C 12.417969 18.851562 12.289062 18.832031 12.160156 18.8125 C 12.039062 18.785156 11.921875 18.785156 11.910156 18.808594 C 11.890625 18.828125 11.992188 18.859375 12.125 18.875 C 12.253906 18.894531 12.367188 18.929688 12.367188 18.953125 C 12.367188 18.980469 12.347656 18.996094 12.324219 18.996094 C 12.300781 18.992188 12.136719 18.964844 11.960938 18.9375 Z M 11.933594 18.726562 C 12.027344 18.644531 12.039062 18.617188 11.972656 18.617188 C 11.933594 18.617188 11.855469 18.648438 11.808594 18.691406 C 11.703125 18.785156 11.464844 18.78125 11.417969 18.683594 C 11.394531 18.625 11.382812 18.625 11.339844 18.675781 C 11.289062 18.746094 11.28125 18.835938 11.328125 18.796875 C 11.339844 18.785156 11.417969 18.785156 11.492188 18.800781 C 11.703125 18.859375 11.792969 18.84375 11.933594 18.726562 Z M 11.335938 18.546875 C 11.382812 18.445312 11.382812 18.429688 11.304688 18.429688 C 11.246094 18.429688 11.21875 18.464844 11.21875 18.546875 C 11.21875 18.699219 11.253906 18.699219 11.335938 18.546875 Z M 10.308594 18.183594 C 10.34375 17.960938 10.390625 17.589844 10.410156 17.351562 C 10.433594 17.121094 10.484375 16.566406 10.527344 16.121094 C 10.566406 15.679688 10.625 15.050781 10.65625 14.742188 C 10.683594 14.425781 10.753906 13.691406 10.8125 13.101562 C 10.867188 12.507812 10.925781 11.863281 10.941406 11.660156 C 10.964844 11.386719 11 11.246094 11.089844 11.113281 C 11.160156 11.023438 11.175781 10.960938 11.148438 10.976562 C 11.105469 10.996094 11.019531 11.101562 10.941406 11.203125 C 10.726562 11.515625 9.4375 12.753906 8.171875 13.886719 C 7.519531 14.460938 7.15625 14.800781 7.351562 14.644531 C 7.914062 14.191406 9.828125 12.464844 10.378906 11.898438 C 10.660156 11.613281 10.890625 11.394531 10.902344 11.398438 C 10.914062 11.410156 10.796875 12.671875 10.679688 13.789062 C 10.667969 13.945312 10.597656 14.714844 10.519531 15.5 C 10.339844 17.421875 10.339844 17.425781 10.269531 18.011719 C 10.238281 18.292969 10.1875 18.523438 10.164062 18.523438 C 10.140625 18.523438 10.121094 18.546875 10.121094 18.574219 C 10.121094 18.601562 10.152344 18.617188 10.1875 18.609375 C 10.226562 18.59375 10.28125 18.425781 10.308594 18.183594 Z M 10.601562 17.957031 C 10.601562 17.941406 10.550781 17.996094 10.492188 18.066406 C 10.433594 18.148438 10.386719 18.257812 10.386719 18.308594 C 10.386719 18.363281 10.433594 18.324219 10.492188 18.195312 C 10.550781 18.078125 10.601562 17.976562 10.601562 17.957031 Z M 6.089844 17.898438 C 6.109375 17.78125 6.136719 17.5625 6.167969 17.40625 C 6.195312 17.246094 6.214844 17.0625 6.214844 17 C 6.207031 16.933594 6.179688 17.042969 6.136719 17.238281 C 6.039062 17.757812 5.992188 18.171875 6.027344 18.140625 C 6.050781 18.117188 6.074219 18.011719 6.089844 17.898438 Z M 5.949219 17.945312 C 5.949219 17.914062 5.898438 17.90625 5.816406 17.925781 C 5.722656 17.945312 5.691406 17.9375 5.710938 17.90625 C 5.734375 17.875 5.675781 17.855469 5.570312 17.855469 C 5.46875 17.847656 5.324219 17.839844 5.230469 17.828125 C 5.125 17.820312 5.09375 17.828125 5.148438 17.855469 C 5.1875 17.875 5.253906 17.882812 5.292969 17.871094 C 5.335938 17.855469 5.363281 17.875 5.363281 17.914062 C 5.363281 17.960938 5.453125 17.980469 5.65625 17.992188 C 5.84375 17.996094 5.949219 17.980469 5.949219 17.945312 Z M 4.730469 17.839844 C 4.71875 17.8125 4.742188 17.804688 4.789062 17.824219 C 4.835938 17.839844 4.90625 17.824219 4.9375 17.78125 C 4.984375 17.738281 4.960938 17.726562 4.789062 17.746094 C 4.679688 17.761719 4.585938 17.78125 4.574219 17.804688 C 4.566406 17.828125 4.425781 17.824219 4.257812 17.796875 C 3.875 17.746094 3.824219 17.78125 4.199219 17.847656 C 4.542969 17.898438 4.777344 17.894531 4.730469 17.839844 Z M 3.882812 17.742188 C 3.90625 17.691406 3.957031 17.6875 4.105469 17.710938 C 4.214844 17.730469 4.296875 17.730469 4.296875 17.710938 C 4.296875 17.6875 4.292969 17.664062 4.285156 17.660156 C 4.273438 17.660156 4.15625 17.644531 4.015625 17.636719 C 3.816406 17.613281 3.765625 17.625 3.765625 17.679688 C 3.765625 17.738281 3.722656 17.742188 3.578125 17.710938 C 3.472656 17.695312 3.390625 17.695312 3.390625 17.710938 C 3.390625 17.738281 3.464844 17.765625 3.566406 17.777344 C 3.652344 17.78125 3.765625 17.796875 3.792969 17.796875 C 3.828125 17.804688 3.871094 17.78125 3.882812 17.742188 Z M 3.03125 17.621094 C 3.042969 17.570312 3.03125 17.523438 3.007812 17.523438 C 2.980469 17.523438 2.960938 17.542969 2.960938 17.570312 C 2.960938 17.621094 2.734375 17.59375 2.476562 17.523438 C 2.398438 17.503906 2.277344 17.492188 2.195312 17.507812 C 2.089844 17.527344 2.070312 17.546875 2.125 17.59375 C 2.160156 17.628906 2.195312 17.640625 2.210938 17.621094 C 2.230469 17.597656 2.394531 17.609375 2.585938 17.640625 C 2.78125 17.675781 2.949219 17.707031 2.96875 17.710938 C 2.984375 17.710938 3.015625 17.671875 3.03125 17.621094 Z M 3.496094 17.570312 C 3.453125 17.546875 3.34375 17.527344 3.253906 17.527344 C 3.113281 17.527344 3.109375 17.539062 3.203125 17.570312 C 3.261719 17.59375 3.367188 17.613281 3.441406 17.613281 C 3.546875 17.621094 3.558594 17.609375 3.496094 17.570312 Z M 3.535156 17.441406 C 3.453125 17.429688 3.324219 17.429688 3.242188 17.441406 C 3.15625 17.453125 3.226562 17.460938 3.390625 17.460938 C 3.546875 17.460938 3.617188 17.453125 3.535156 17.441406 Z M 3.148438 17.285156 L 3.253906 17.242188 L 3.148438 17.246094 C 3.089844 17.246094 2.972656 17.269531 2.878906 17.285156 L 2.722656 17.324219 L 2.878906 17.324219 C 2.972656 17.324219 3.089844 17.308594 3.148438 17.285156 Z M 4.707031 17.222656 C 4.75 17.1875 4.117188 17.242188 4.0625 17.277344 C 4.046875 17.296875 4.175781 17.296875 4.351562 17.277344 C 4.53125 17.261719 4.691406 17.238281 4.707031 17.222656 Z M 4.09375 17.136719 C 4.308594 17.089844 4.386719 17.0625 4.269531 17.078125 C 4.152344 17.09375 4.003906 17.117188 3.945312 17.125 C 3.640625 17.160156 3.324219 17.226562 3.289062 17.261719 C 3.242188 17.308594 3.613281 17.253906 4.09375 17.136719 Z M 3.859375 17.003906 C 4.023438 16.925781 4.320312 16.851562 4.46875 16.839844 C 4.484375 16.835938 4.515625 16.820312 4.539062 16.800781 C 4.554688 16.777344 4.496094 16.777344 4.410156 16.785156 C 4.234375 16.804688 3.472656 17.089844 3.589844 17.09375 C 3.628906 17.09375 3.746094 17.058594 3.859375 17.003906 Z M 5.339844 16.945312 C 5.386719 16.90625 5.210938 16.921875 4.832031 17.003906 C 4.695312 17.035156 4.730469 17.035156 4.964844 17.011719 C 5.140625 17 5.304688 16.972656 5.339844 16.945312 Z M 6.324219 16.238281 C 6.359375 15.9375 6.402344 15.636719 6.414062 15.570312 C 6.429688 15.484375 6.429688 15.476562 6.390625 15.527344 C 6.367188 15.5625 6.3125 15.839844 6.277344 16.140625 C 6.242188 16.441406 6.195312 16.734375 6.183594 16.785156 C 6.167969 16.851562 6.171875 16.867188 6.207031 16.835938 C 6.238281 16.808594 6.289062 16.539062 6.324219 16.238281 Z M 12.835938 10.863281 C 12.835938 9.726562 12.8125 8.75 12.792969 8.699219 C 12.765625 8.648438 12.746094 9.707031 12.746094 11.050781 C 12.753906 12.457031 12.777344 13.378906 12.792969 13.21875 C 12.824219 13.058594 12.839844 12 12.835938 10.863281 Z M 11.339844 10.722656 C 11.394531 10.628906 11.574219 10.347656 11.734375 10.097656 C 12.007812 9.671875 12.320312 9.140625 12.203125 9.292969 C 12.15625 9.355469 11.664062 10.109375 11.316406 10.664062 C 11.246094 10.773438 11.1875 10.882812 11.1875 10.894531 C 11.1875 10.941406 11.21875 10.90625 11.339844 10.722656 Z M 12.933594 10.277344 C 12.921875 10.171875 12.917969 10.273438 12.917969 10.507812 C 12.917969 10.746094 12.921875 10.828125 12.933594 10.707031 C 12.945312 10.582031 12.945312 10.382812 12.933594 10.277344 Z M 12.507812 8.867188 C 12.625 8.664062 12.734375 8.535156 12.777344 8.550781 C 12.824219 8.570312 12.835938 8.53125 12.804688 8.421875 C 12.78125 8.273438 12.78125 8.273438 12.863281 8.367188 C 12.945312 8.453125 12.945312 8.449219 12.917969 8.296875 C 12.898438 8.203125 12.859375 8.121094 12.835938 8.113281 C 12.8125 8.101562 12.792969 8.054688 12.792969 8.011719 C 12.792969 7.953125 12.746094 7.8125 12.695312 7.6875 C 12.636719 7.566406 12.578125 7.425781 12.554688 7.375 C 12.53125 7.296875 12.507812 7.296875 12.441406 7.34375 C 12.378906 7.390625 12.378906 7.425781 12.476562 7.585938 C 12.582031 7.769531 12.582031 7.84375 12.496094 8.117188 C 12.476562 8.164062 12.488281 8.199219 12.519531 8.199219 C 12.546875 8.199219 12.589844 8.117188 12.613281 8.019531 C 12.648438 7.851562 12.652344 7.851562 12.6875 7.960938 C 12.765625 8.203125 12.734375 8.4375 12.613281 8.617188 C 12.449219 8.847656 12.25 9.199219 12.277344 9.199219 C 12.296875 9.199219 12.394531 9.042969 12.507812 8.867188 Z M 8.582031 8.589844 C 8.726562 8.480469 8.703125 8.304688 8.535156 8.230469 C 8.410156 8.167969 8.398438 8.152344 8.476562 8.128906 C 8.523438 8.105469 8.609375 8.117188 8.667969 8.148438 C 8.75 8.183594 8.78125 8.179688 8.804688 8.121094 C 8.828125 8.070312 8.78125 8.03125 8.652344 7.980469 C 8.40625 7.886719 8.398438 7.894531 8.292969 8.054688 C 8.1875 8.222656 8.21875 8.339844 8.363281 8.339844 C 8.417969 8.339844 8.488281 8.378906 8.515625 8.429688 C 8.570312 8.5 8.574219 8.496094 8.550781 8.390625 C 8.535156 8.3125 8.539062 8.296875 8.582031 8.332031 C 8.664062 8.402344 8.597656 8.519531 8.480469 8.515625 C 8.421875 8.515625 8.335938 8.46875 8.28125 8.429688 C 8.164062 8.316406 8.140625 8.320312 8.140625 8.433594 C 8.140625 8.546875 8.28125 8.671875 8.394531 8.671875 C 8.441406 8.671875 8.527344 8.640625 8.582031 8.589844 Z M 7.878906 8.464844 C 7.878906 8.453125 7.9375 8.304688 8.007812 8.132812 C 8.128906 7.84375 8.128906 7.816406 8.046875 7.816406 C 7.976562 7.816406 7.917969 7.898438 7.832031 8.121094 C 7.695312 8.484375 7.695312 8.484375 7.796875 8.484375 C 7.835938 8.484375 7.878906 8.472656 7.878906 8.464844 Z M 7.542969 8.285156 C 7.578125 8.25 7.609375 8.167969 7.609375 8.101562 C 7.609375 8.035156 7.636719 7.953125 7.667969 7.929688 C 7.824219 7.785156 7.496094 7.546875 7.296875 7.660156 C 7.132812 7.75 7.15625 7.832031 7.339844 7.796875 C 7.480469 7.765625 7.503906 7.777344 7.503906 7.863281 C 7.503906 7.929688 7.472656 7.949219 7.421875 7.933594 C 7.332031 7.898438 7.308594 8.03125 7.398438 8.082031 C 7.484375 8.128906 7.457031 8.199219 7.339844 8.199219 C 7.28125 8.199219 7.234375 8.164062 7.234375 8.128906 C 7.234375 8.085938 7.199219 8.054688 7.15625 8.054688 C 7.046875 8.054688 7.050781 8.167969 7.15625 8.265625 C 7.257812 8.355469 7.457031 8.367188 7.542969 8.285156 Z M 8.890625 6.65625 C 8.890625 6.625 8.84375 6.582031 8.792969 6.570312 C 8.667969 6.539062 8.492188 6.320312 8.546875 6.246094 C 8.609375 6.15625 8.78125 6.203125 8.890625 6.34375 C 8.996094 6.476562 9.214844 6.542969 9.214844 6.4375 C 9.214844 6.34375 8.808594 6.0625 8.675781 6.0625 L 8.546875 6.070312 L 8.675781 6.105469 L 8.808594 6.144531 L 8.664062 6.152344 C 8.539062 6.152344 8.515625 6.140625 8.546875 6.070312 C 8.574219 5.972656 8.328125 5.535156 8.246094 5.535156 C 8.164062 5.535156 8.1875 5.644531 8.335938 5.878906 C 8.441406 6.0625 8.457031 6.125 8.410156 6.179688 C 8.324219 6.273438 8.382812 6.464844 8.546875 6.609375 C 8.679688 6.730469 8.890625 6.761719 8.890625 6.65625 Z M 10.996094 4.160156 C 11.011719 4.136719 10.988281 4.09375 10.949219 4.0625 C 10.90625 4.027344 10.84375 3.917969 10.800781 3.816406 C 10.773438 3.710938 10.726562 3.632812 10.695312 3.632812 C 10.625 3.632812 10.648438 3.75 10.761719 3.984375 C 10.867188 4.199219 10.9375 4.246094 10.996094 4.160156 Z M 10.621094 3.398438 C 10.574219 3.308594 10.527344 3.195312 10.527344 3.132812 C 10.519531 3.078125 10.492188 3.042969 10.449219 3.046875 C 10.421875 3.058594 10.390625 3.023438 10.398438 2.976562 C 10.402344 2.929688 10.398438 2.847656 10.390625 2.796875 C 10.386719 2.726562 10.375 2.714844 10.339844 2.765625 C 10.308594 2.8125 10.28125 2.789062 10.234375 2.679688 C 10.199219 2.59375 10.1875 2.507812 10.203125 2.488281 C 10.222656 2.460938 10.191406 2.441406 10.144531 2.441406 C 10.058594 2.441406 10.0625 2.503906 10.199219 2.796875 C 10.234375 2.878906 10.261719 2.949219 10.269531 2.964844 C 10.273438 2.980469 10.34375 3.117188 10.433594 3.277344 C 10.519531 3.429688 10.566406 3.566406 10.542969 3.574219 C 10.515625 3.582031 10.507812 3.613281 10.527344 3.640625 C 10.550781 3.667969 10.589844 3.664062 10.632812 3.625 C 10.695312 3.566406 10.695312 3.53125 10.621094 3.398438 Z M 10.070312 2.441406 C 10.175781 2.34375 10.167969 2.253906 10.0625 2.253906 C 10.027344 2.253906 10.023438 2.273438 10.039062 2.304688 C 10.0625 2.328125 10.035156 2.394531 9.980469 2.445312 C 9.859375 2.5625 9.929688 2.5625 10.070312 2.441406 Z M 9.941406 2.019531 C 9.941406 1.890625 9.917969 1.839844 9.871094 1.855469 C 9.828125 1.871094 9.800781 1.902344 9.800781 1.921875 C 9.800781 1.960938 9.917969 2.203125 9.933594 2.203125 C 9.941406 2.203125 9.945312 2.125 9.941406 2.019531 Z M 9.941406 2.019531 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 1.472656 17.6875 C 1.390625 17.605469 1.398438 17.519531 1.480469 17.539062 C 1.515625 17.542969 1.539062 17.523438 1.53125 17.492188 C 1.527344 17.460938 1.574219 17.425781 1.632812 17.414062 C 1.71875 17.390625 1.726562 17.402344 1.667969 17.460938 C 1.601562 17.53125 1.613281 17.539062 1.761719 17.507812 C 1.914062 17.476562 1.914062 17.476562 1.8125 17.546875 C 1.753906 17.585938 1.667969 17.644531 1.621094 17.679688 C 1.554688 17.730469 1.527344 17.730469 1.472656 17.6875 Z M 1.472656 17.6875 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 14.175781 15.5 C 14.140625 15.3125 14.152344 15.25 14.210938 15.296875 C 14.230469 15.3125 14.234375 15.410156 14.222656 15.503906 L 14.207031 15.695312 Z M 14.175781 15.5 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 12.976562 12.683594 C 12.988281 12.585938 13.003906 12.316406 13.003906 12.078125 C 13.003906 11.78125 13.023438 11.667969 13.058594 11.699219 C 13.132812 11.765625 13.0625 12.859375 12.988281 12.859375 C 12.957031 12.859375 12.953125 12.789062 12.976562 12.683594 Z M 12.976562 12.683594 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 17.898438 12.199219 C 17.855469 12.140625 17.914062 12.003906 17.980469 12.003906 C 18.007812 12.003906 18.027344 12.023438 18.027344 12.046875 C 18.027344 12.070312 18.042969 12.121094 18.0625 12.167969 C 18.097656 12.25 17.949219 12.273438 17.898438 12.199219 Z M 17.898438 12.199219 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 13.578125 10.878906 C 13.554688 10.863281 13.539062 10.722656 13.539062 10.5625 C 13.539062 10.40625 13.550781 10.289062 13.5625 10.296875 C 13.585938 10.3125 13.644531 10.910156 13.621094 10.910156 C 13.613281 10.910156 13.589844 10.894531 13.578125 10.878906 Z M 13.578125 10.878906 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 12.324219 7.125 C 12.34375 7.101562 12.324219 7.015625 12.285156 6.929688 C 12.191406 6.726562 12.183594 6.675781 12.253906 6.675781 C 12.289062 6.675781 12.308594 6.714844 12.308594 6.761719 C 12.308594 6.808594 12.34375 6.890625 12.382812 6.941406 C 12.464844 7.03125 12.441406 7.15625 12.347656 7.15625 C 12.3125 7.15625 12.308594 7.140625 12.324219 7.125 Z M 12.324219 7.125 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 11.980469 6.308594 C 11.910156 6.140625 11.902344 6.078125 11.949219 6.046875 C 11.992188 6.023438 11.96875 6.007812 11.886719 6.007812 C 11.761719 6.007812 11.761719 6.003906 11.851562 5.957031 C 11.925781 5.917969 11.957031 5.921875 11.996094 5.96875 C 12.015625 6.003906 12.027344 6.046875 12.007812 6.070312 C 11.996094 6.085938 12.019531 6.164062 12.066406 6.242188 C 12.113281 6.324219 12.148438 6.421875 12.148438 6.460938 C 12.148438 6.605469 12.066406 6.527344 11.980469 6.308594 Z M 11.980469 6.308594 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 13.5625 5.75 C 13.5625 5.433594 13.566406 5.308594 13.578125 5.476562 C 13.585938 5.640625 13.585938 5.894531 13.578125 6.046875 C 13.566406 6.195312 13.5625 6.0625 13.5625 5.75 Z M 13.5625 5.75 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 11.703125 5.785156 C 11.652344 5.703125 11.617188 5.585938 11.617188 5.523438 L 11.617188 5.417969 L 11.722656 5.535156 C 11.773438 5.601562 11.816406 5.660156 11.796875 5.671875 C 11.785156 5.683594 11.804688 5.71875 11.839844 5.757812 C 11.886719 5.804688 11.886719 5.839844 11.839844 5.875 C 11.804688 5.910156 11.761719 5.878906 11.703125 5.785156 Z M 11.703125 5.785156 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 13.507812 4.796875 C 13.492188 4.757812 13.496094 4.589844 13.519531 4.429688 L 13.578125 4.132812 L 13.574219 4.5 C 13.574219 4.871094 13.5625 4.921875 13.507812 4.796875 Z M 13.507812 4.796875 ",
                  }),
                  Object(n.jsx)("path", {
                    d:
                      "M 8.230469 1.125 C 8.160156 0.972656 8.199219 0.867188 8.371094 0.773438 C 8.597656 0.652344 8.640625 0.65625 8.605469 0.800781 C 8.574219 0.886719 8.597656 0.929688 8.675781 0.96875 C 8.78125 1.015625 8.785156 1.007812 8.761719 0.902344 C 8.746094 0.835938 8.726562 0.761719 8.703125 0.730469 C 8.6875 0.703125 8.722656 0.683594 8.78125 0.683594 C 8.863281 0.683594 8.878906 0.710938 8.867188 0.816406 C 8.855469 0.886719 8.851562 0.96875 8.84375 0.996094 C 8.84375 1.023438 8.734375 1.074219 8.609375 1.113281 C 8.28125 1.199219 8.257812 1.203125 8.230469 1.125 Z M 8.230469 1.125 ",
                  }),
                ],
              }),
            }
          )
        );
      };
      function yt(e) {
        var t = e.classes,
          a = e.onCancel,
          c = e.onStart,
          i = Object(o.useState)(0),
          s = Object(r.a)(i, 2),
          C = s[0],
          l = s[1];
        return Object(n.jsx)(n.Fragment, {
          children: Object(n.jsxs)(v.a, {
            className: t.paper,
            children: [
              Object(n.jsx)(_.a, {
                component: "h1",
                variant: "h5",
                align: "center",
                children: "What do you want to do today?",
              }),
              Object(n.jsxs)(w.a, {
                children: [
                  Object(n.jsxs)(L.a, {
                    button: !0,
                    selected: 0 === C,
                    onClick: function (e) {
                      l(0);
                    },
                    children: [
                      Object(n.jsx)(ft.a, {
                        children: Object(n.jsx)(mt.a, {}),
                      }),
                      Object(n.jsx)(pt.a, {
                        primary: "Update the short and long descriptions",
                      }),
                    ],
                  }),
                  Object(n.jsxs)(L.a, {
                    children: [
                      Object(n.jsx)(ft.a, { children: Object(n.jsx)(vt, {}) }),
                      Object(n.jsx)(pt.a, {
                        primary: "More options coming soon",
                      }),
                    ],
                  }),
                ],
              }),
              Object(n.jsxs)(q.a, {
                display: "flex",
                justifyContent: "flex-end",
                children: [
                  Object(n.jsx)(q.a, {
                    m: 1,
                    children: Object(n.jsx)(X.a, {
                      variant: "outlined",
                      color: "primary",
                      onClick: function () {
                        a();
                      },
                      children: "Cancel",
                    }),
                  }),
                  Object(n.jsx)(q.a, {
                    m: 1,
                    children: Object(n.jsx)(X.a, {
                      variant: "outlined",
                      color: "primary",
                      onClick: function () {
                        c(C);
                      },
                      children: "Let's go",
                    }),
                  }),
                ],
              }),
            ],
          }),
        });
      }
      var _t = a(112),
        Mt = a(681),
        wt = a(220),
        Lt = a.n(wt),
        Zt = a(340),
        St = a(83),
        kt = Object(_t.a)();
      function Bt(e) {
        return Object(Zt.a)(Object(St.convertFromRaw)(JSON.parse(e)));
      }
      function Pt(e) {
        var t = Object(St.convertFromHTML)(e || "type some text ..."),
          a = St.ContentState.createFromBlockArray(
            t.contentBlocks,
            t.entityMap
          );
        return JSON.stringify(Object(St.convertToRaw)(a));
      }
      function Ft(e) {
        var t = e.classes,
          a = e.onCancel,
          c = e.onSave,
          i = e.short,
          s = e.full,
          C = Object(o.useState)({ short: i, full: s, saving: "no" }),
          l = Object(r.a)(C, 2),
          b = l[0],
          d = l[1],
          j = Object(o.useRef)(null),
          u = Object(o.useRef)(null);
        Object(o.useEffect)(
          function () {
            switch (b.saving) {
              case "short":
                u.current.save();
                break;
              case "full":
                d(Object(f.a)(Object(f.a)({}, b), {}, { saving: "no" })),
                  c(b.short, b.full);
            }
          },
          [b, c]
        );
        return Object(n.jsxs)(v.a, {
          className: t.editor,
          children: [
            Object(n.jsx)(_.a, {
              variant: "h6",
              children: "Short description",
            }),
            Object(n.jsx)(Mt.a, {
              theme: kt,
              children: Object(n.jsx)(Lt.a, {
                controls: ["bold", "italic"],
                label: "Start typing...",
                name: "short_description",
                onSave: function (e) {
                  var t = Bt(e);
                  d(
                    Object(f.a)(
                      Object(f.a)({}, b),
                      {},
                      { short: t, saving: "short" }
                    )
                  );
                },
                defaultValue: Pt(b.short),
                maxLength: "500",
                ref: j,
              }),
            }),
            Object(n.jsx)(_.a, { variant: "h6", children: "Full description" }),
            Object(n.jsx)(Mt.a, {
              theme: kt,
              children: Object(n.jsx)(Lt.a, {
                controls: [
                  "title",
                  "bold",
                  "italic",
                  "numberList",
                  "bulletList",
                  "link",
                ],
                label: "Start typing...",
                name: "full_description",
                onSave: function (e) {
                  var t = Bt(e);
                  d(
                    Object(f.a)(
                      Object(f.a)({}, b),
                      {},
                      { full: t, saving: "full" }
                    )
                  );
                },
                defaultValue: Pt(b.full),
                ref: u,
              }),
            }),
            Object(n.jsx)(X.a, {
              variant: "outlined",
              color: "primary",
              onClick: a,
              children: "Cancel",
            }),
            Object(n.jsx)(X.a, {
              variant: "outlined",
              color: "primary",
              onClick: function () {
                j.current.save();
              },
              children: "Send",
            }),
          ],
        });
      }
      function Nt(e) {
        var t = e.classes;
        e.onCancel, e.onSave, e.boat;
        return Object(n.jsx)(v.a, {
          className: t.paper,
          children: Object(n.jsx)(_.a, {
            component: "h1",
            variant: "h5",
            align: "center",
            children: "Editing the rig and other basic details",
          }),
        });
      }
      function Tt(e) {
        var t = e.classes;
        e.onCancel, e.onSave, e.boat;
        return Object(n.jsx)(v.a, {
          className: t.paper,
          children: Object(n.jsx)(_.a, {
            component: "h1",
            variant: "h5",
            align: "center",
            children: "Editing the handicap",
          }),
        });
      }
      function It(e) {
        var t = e.classes;
        e.onCancel, e.onSave, e.boat;
        return Object(n.jsxs)(v.a, {
          className: t.paper,
          children: [
            Object(n.jsx)(_.a, {
              variant: "h5",
              align: "center",
              children: "Editing the ownership and/or for sale information.",
            }),
            Object(n.jsx)(_.a, {
              variant: "h6",
              align: "center",
              children:
                "Note - only owners or the editors should use this option",
            }),
          ],
        });
      }
      function Rt(e) {
        var t = e.classes;
        e.onCancel, e.onSave, e.boat;
        return Object(n.jsx)(v.a, {
          className: t.paper,
          children: Object(n.jsx)(_.a, {
            component: "h1",
            variant: "h5",
            align: "center",
            children: "step through all fields",
          }),
        });
      }
      Object.assign(kt, {
        overrides: {
          MUIRichTextEditor: {
            root: { width: "100%" },
            toolbar: {
              borderTop: "1px solid gray",
              borderLeft: "1px solid gray",
              borderRight: "1px solid gray",
              backgroundColor: "whitesmoke",
            },
            editor: {
              border: "1px solid gray",
              marginBottom: 10,
              paddingLeft: "5px",
              paddingRight: "5px",
            },
          },
        },
      });
      var Dt = Object(Z.a)(function (e) {
        return {
          appBar: { position: "relative" },
          layout: Object(m.a)(
            {
              width: "auto",
              marginLeft: e.spacing(2),
              marginRight: e.spacing(2),
            },
            e.breakpoints.up(600 + 2 * e.spacing(2)),
            { width: 600, marginLeft: "auto", marginRight: "auto" }
          ),
          paper: Object(m.a)(
            { marginTop: 0, marginBottom: 0, padding: e.spacing(2) },
            e.breakpoints.up(600 + 2 * e.spacing(3)),
            {
              marginTop: e.spacing(6),
              marginBottom: e.spacing(6),
              padding: e.spacing(3),
            }
          ),
          editor: {
            minwidth: 500,
            margin: e.spacing(1),
            padding: 0,
            border: "none",
            boxShadow: "none",
          },
          stepper: { padding: e.spacing(3, 0, 5) },
          buttons: { display: "flex", justifyContent: "flex-end" },
          button: { marginTop: e.spacing(3), marginLeft: e.spacing(1) },
        };
      });
      function Ht(e) {
        var t = e.boat,
          a = e.activity,
          r = e.handleClose,
          o = e.handleStart,
          c = e.handleCancel,
          i = e.classes;
        switch (a) {
          case -1:
            return Object(n.jsx)(yt, { classes: i, onCancel: c, onStart: o });
          case 0:
            return Object(n.jsx)(Ft, {
              classes: i,
              onCancel: c,
              onSave: function (e, a) {
                r(
                  Object(f.a)(
                    Object(f.a)({}, t),
                    {},
                    { short_description: e, full_description: a }
                  )
                );
              },
              short: t.short_description,
              full: t.full_description,
            });
          case 1:
            return Object(n.jsx)(Nt, { classes: i });
          case 2:
            return Object(n.jsx)(Tt, { classes: i });
          case 3:
            return Object(n.jsx)(It, { classes: i });
          case 4:
            return Object(n.jsx)(Rt, { classes: i });
          default:
            return null;
        }
      }
      function zt(e) {
        var t = e.boat,
          a = e.onClose,
          c = e.open,
          i = Dt(),
          s = Object(o.useState)(-1),
          C = Object(r.a)(s, 2),
          b = C[0],
          d = C[1],
          j = Object(l.a)("https://ogauk.github.io/boatregister/pickers.json"),
          u = Object(r.a)(j, 1)[0];
        u.error && (u.data = {});
        var h = u.data,
          g = function (e) {
            ut.a
              .post(
                "https://ae69efba7038dcdfe87ce1c3479d2976.m.pipedream.net",
                { old: t, new: e, uuid: Object(ht.v4)() }
              )
              .then(function (e) {
                console.log("post", e), a();
              })
              .catch(function (e) {
                console.log("post", e);
              }),
              a();
          };
        return Object(n.jsxs)(lt.a, {
          onClose: g,
          "aria-labelledby": "updateboat-dialog-title",
          open: c,
          children: [
            Object(n.jsx)(gt.a, {
              id: "updateboat-dialog-title",
              children: "Update Boat",
            }),
            Ht({
              pickers: h,
              boat: t,
              activity: b,
              handleClose: g,
              handleStart: function (e) {
                d(e);
              },
              handleCancel: function (e) {
                a();
              },
              classes: i,
            }),
          ],
        });
      }
      function Gt(e) {
        var t = e.classes,
          a = e.boat,
          c = Object(o.useState)(!1),
          i = Object(r.a)(c, 2),
          s = i[0],
          C = i[1];
        return Object(n.jsxs)("div", {
          children: [
            Object(n.jsx)(X.a, {
              className: t.button,
              size: "small",
              endIcon: Object(n.jsx)(Ct.a, {}),
              variant: "contained",
              color: "primary",
              onClick: function () {
                C(!0);
              },
              children: "I have edits for this boat",
            }),
            Object(n.jsx)(zt, {
              boat: a,
              onClose: function () {
                C(!1);
              },
              open: s,
            }),
          ],
        });
      }
      var $t = a(338),
        Wt = a(685),
        Yt = a(683),
        qt = a(684);
      function At() {
        var e = Object($t.a)([
          "\n  mutation AddEnquiry(\n      $id: uuid!, \n      $boat_name: String!, \n      $oga_no: Int!, \n      $email: String!, \n      $text: String!, \n      $type: enquiry_type_enum!) {\n    insert_enquiry(objects: { \n      boat: $id, \n      boat_name: $boat_name, \n      oga_no: $oga_no, \n      email: $email, \n      text: $text,\n      type: $type,\n      }) {\n      returning {\n        id\n      }\n    }\n  }\n",
        ]);
        return (
          (At = function () {
            return e;
          }),
          e
        );
      }
      var Et = E()(At());
      function Ut(e) {
        var t = e.open,
          a = e.boat,
          r = e.email,
          o = e.onEmailChange,
          c = e.onSend,
          i = e.onCancel,
          s = e.onTextChange;
        return Object(n.jsxs)(lt.a, {
          top: !0,
          open: t,
          onClose: i,
          "aria-labelledby": "form-dialog-title",
          children: [
            Object(n.jsx)(gt.a, {
              id: "form-dialog-title",
              children: "Contact Us",
            }),
            Object(n.jsxs)(Yt.a, {
              children: [
                Object(n.jsxs)(qt.a, {
                  variant: "subtitle2",
                  children: [
                    "Have some information or a question about ",
                    Object(n.jsx)("i", { children: a.name }),
                    " (",
                    a.oga_no,
                    ")?",
                    Object(n.jsx)("p", {}),
                    "We'd love to hear from you.",
                    Object(n.jsx)("p", {}),
                    "Please enter your email address here and tell us how we can help.",
                  ],
                }),
                Object(n.jsx)(P.a, {
                  error: "" === r,
                  onChange: o,
                  autoFocus: !0,
                  margin: "dense",
                  label: "Email Address",
                  type: "email",
                  fullWidth: !0,
                }),
                Object(n.jsx)(P.a, {
                  onChange: s,
                  margin: "dense",
                  label: "About your enquiry",
                  type: "text",
                  fullWidth: !0,
                }),
              ],
            }),
            Object(n.jsxs)(Wt.a, {
              children: [
                Object(n.jsx)(X.a, {
                  onClick: i,
                  color: "primary",
                  children: "Cancel",
                }),
                Object(n.jsx)(X.a, {
                  onClick: c,
                  color: "primary",
                  disabled: "" === r,
                  children: "Send",
                }),
              ],
            }),
          ],
        });
      }
      function Jt(e) {
        var t = e.boat,
          a = e.classes,
          c = Object(o.useState)(!1),
          i = Object(r.a)(c, 2),
          s = i[0],
          C = i[1],
          l = Object(o.useState)(!1),
          b = Object(r.a)(l, 2),
          d = b[0],
          j = b[1],
          h = Object(o.useState)(""),
          g = Object(r.a)(h, 2),
          p = g[0],
          f = g[1],
          O = Object(o.useState)(""),
          m = Object(r.a)(O, 2),
          x = m[0],
          v = m[1],
          y = Object(u.useMutation)(Et),
          _ = Object(r.a)(y, 2),
          M = _[0];
        _[1];
        return Object(n.jsxs)(n.Fragment, {
          children: [
            Object(n.jsx)(X.a, {
              className: a.button,
              size: "small",
              endIcon: Object(n.jsx)(Ct.a, {}),
              variant: "contained",
              color: "primary",
              onClick: function () {
                C(!0);
              },
              children: "Contact us about this boat",
            }),
            Object(n.jsx)(Ut, {
              open: s,
              boat: t,
              email: p,
              onCancel: function () {
                C(!1);
              },
              onSend: function () {
                var e = t.id,
                  a = t.name,
                  n = t.oga_no;
                M({
                  variables: {
                    type: "general",
                    id: e,
                    boat_name: a,
                    oga_no: n,
                    email: p,
                    text: x,
                  },
                }),
                  C(!1),
                  j(!0);
              },
              onEmailChange: function (e) {
                e.target.reportValidity()
                  ? (console.log("email", e.target), f(e.target.value))
                  : console.log("invalid email");
              },
              onTextChange: function (e) {
                v(e.target.value);
              },
            }),
            Object(n.jsx)(Xe.a, {
              anchorOrigin: { vertical: "bottom", horizontal: "right" },
              open: d,
              autoHideDuration: 2e3,
              onClose: function () {
                j(!1);
              },
              message: "Thanks, we'll get back to you.",
              severity: "success",
            }),
          ],
        });
      }
      var Vt = Object(Z.a)(function (e) {
        return {
          root: { display: "flex" },
          title: { flexGrow: 1 },
          drawerPaper: {
            position: "relative",
            whiteSpace: "nowrap",
            width: 240,
            transition: e.transitions.create("width", {
              easing: e.transitions.easing.sharp,
              duration: e.transitions.duration.enteringScreen,
            }),
          },
          drawerPaperClose: Object(m.a)(
            {
              overflowX: "hidden",
              transition: e.transitions.create("width", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.leavingScreen,
              }),
              width: e.spacing(7),
            },
            e.breakpoints.up("sm"),
            { width: e.spacing(9) }
          ),
          appBarSpacer: e.mixins.toolbar,
          content: { flexGrow: 1, height: "100vh", overflow: "auto" },
          container: { paddingTop: e.spacing(4), paddingBottom: e.spacing(4) },
          paper: {
            padding: e.spacing(2),
            display: "flex",
            overflow: "auto",
            flexDirection: "column",
          },
          fixedHeight: { height: 600 },
          fillHeight: { height: "100%" },
          button: { margin: e.spacing(1) },
          iframe: { border: "none !important" },
        };
      });
      function Kt(e) {
        var t = e.boat,
          a = e.linkComponent,
          r = e.location,
          o = Vt();
        return Object(n.jsx)(v.a, {
          children: Object(n.jsxs)(k.a, {
            container: !0,
            direction: "row",
            alignItems: "flex-end",
            children: [
              Object(n.jsx)(k.a, {
                item: !0,
                xs: 2,
                children: Object(n.jsx)(X.a, {
                  size: "small",
                  variant: "contained",
                  className: o.button,
                  component: a,
                  to: ue(r),
                  children: "See more boats",
                }),
              }),
              Object(n.jsx)(k.a, {
                item: !0,
                xs: 3,
                children: Object(n.jsx)(Jt, { classes: o, boat: t }),
              }),
              Object(n.jsx)(k.a, {
                item: !0,
                xs: 3,
                children: Object(n.jsx)(dt, { classes: o, boat: t }),
              }),
              Object(n.jsx)(k.a, {
                item: !0,
                xs: 3,
                children: Object(n.jsx)(Gt, { classes: o, boat: t }),
              }),
            ],
          }),
        });
      }
      var Qt = a(339),
        Xt = function (e) {
          var t = e.classes,
            a = e.albumKey;
          return a
            ? Object(n.jsx)(Qt.a, {
                url: ""
                  .concat("https://oga.smugmug.com/frame/slideshow", "?key=")
                  .concat(a, "&")
                  .concat(
                    "autoStart=1&captions=1&navigation=1&playButton=1&randomize=1&speed=3&transition=fade&transitionSpeed=2"
                  ),
                width: "800",
                height: "600",
                frameborder: "no",
                scrolling: "no",
                className: t.iframe,
              })
            : null;
        },
        ea = Object(Z.a)(function (e) {
          return {
            root: { display: "flex" },
            title: { flexGrow: 1 },
            drawerPaper: {
              position: "relative",
              whiteSpace: "nowrap",
              width: 240,
              transition: e.transitions.create("width", {
                easing: e.transitions.easing.sharp,
                duration: e.transitions.duration.enteringScreen,
              }),
            },
            drawerPaperClose: Object(m.a)(
              {
                overflowX: "hidden",
                transition: e.transitions.create("width", {
                  easing: e.transitions.easing.sharp,
                  duration: e.transitions.duration.leavingScreen,
                }),
                width: e.spacing(7),
              },
              e.breakpoints.up("sm"),
              { width: e.spacing(9) }
            ),
            appBarSpacer: e.mixins.toolbar,
            content: { flexGrow: 1, height: "100vh", overflow: "auto" },
            container: {
              paddingTop: e.spacing(4),
              paddingBottom: e.spacing(4),
            },
            paper: {
              padding: e.spacing(2),
              display: "flex",
              overflow: "auto",
              flexDirection: "column",
            },
            fixedHeight: { height: 600 },
            fillHeight: { height: "100%" },
            button: { margin: e.spacing(1) },
            iframe: { border: "none !important" },
          };
        });
      function ta(e) {
        var t = e.boat,
          a = e.linkComponent,
          r = e.location,
          o = ea(),
          c = Object(Be.a)(o.paper, o.fixedHeight);
        return Object(n.jsx)(v.a, {
          children: Object(n.jsxs)(y.a, {
            maxWidth: "lg",
            className: o.container,
            children: [
              Object(n.jsxs)(k.a, {
                container: !0,
                spacing: 3,
                children: [
                  Object(n.jsx)(k.a, {
                    item: !0,
                    xs: 12,
                    md: 8,
                    lg: 9,
                    children: Object(n.jsx)(_.a, {
                      variant: "h3",
                      component: "h3",
                      children: t.name,
                    }),
                  }),
                  Object(n.jsx)(k.a, {
                    item: !0,
                    xs: 12,
                    md: 4,
                    lg: 3,
                    children: Object(n.jsx)(_.a, {
                      variant: "h3",
                      component: "h3",
                      children: t.year,
                    }),
                  }),
                  Object(n.jsx)(k.a, {
                    item: !0,
                    xs: 12,
                    md: 8,
                    lg: 9,
                    children: Object(n.jsx)(v.a, {
                      className: c,
                      children: Object(n.jsx)(Xt, {
                        classes: o,
                        albumKey: t.image_key,
                      }),
                    }),
                  }),
                  Object(n.jsx)(k.a, {
                    item: !0,
                    xs: 12,
                    md: 4,
                    lg: 3,
                    children: Object(n.jsx)(it, {
                      classes: o,
                      boat: t,
                      location: r,
                    }),
                  }),
                  Object(n.jsx)(k.a, {
                    item: !0,
                    xs: 12,
                    children: Object(n.jsx)(Qe, { classes: o, boat: t }),
                  }),
                ],
              }),
              Object(n.jsx)(Kt, {
                classes: o,
                boat: t,
                linkComponent: a,
                location: r,
              }),
            ],
          }),
        });
      }
      var aa = function (e) {
          var t = e.location,
            a = new URLSearchParams(t.search).get("oga_no"),
            c = Object(l.a)(
              "https://ogauk.github.io/boatregister/page-data/boat/".concat(
                a,
                "/page-data.json"
              )
            ),
            i = Object(r.a)(c, 1)[0];
          if (
            (Object(o.useEffect)(function () {
              i.data &&
                (document.title = ""
                  .concat(i.data.result.pageContext.boat.name, " (")
                  .concat(i.data.result.pageContext.boat.oga_no, ")"));
            }),
            i.loading)
          )
            return Object(n.jsx)("p", { children: "Loading..." });
          if (i.error)
            return a
              ? Object(n.jsxs)("div", {
                  children: [
                    "Sorry, we had a problem getting the data for the boat with OGA number ",
                    a,
                    Object(n.jsxs)("p", {
                      children: [
                        "Please try searching on the ",
                        Object(n.jsx)("a", {
                          href: t.origin,
                          children: "Main Page",
                        }),
                      ],
                    }),
                  ],
                })
              : Object(n.jsxs)("div", {
                  children: [
                    "If you were looking for a specific boat and know its OGA Number, you can add ?oga_no=1 or any other number to the url.",
                    Object(n.jsxs)("p", {
                      children: [
                        "Otherwise try the ",
                        Object(n.jsx)("a", {
                          href: t.origin,
                          children: "Main Page",
                        }),
                      ],
                    }),
                  ],
                });
          var s = i.data.result.pageContext.boat;
          return Object(n.jsx)(ta, { boat: s, linkComponent: p, location: t });
        },
        na = {
          page: 1,
          boatsPerPage: "12",
          sortField: "editors_choice",
          sortDirection: "asc",
          filters: { sale: !1 },
        },
        ra = {
          page: 1,
          boatsPerPage: "12",
          sortField: "price",
          sortDirection: "desc",
          filters: { sale: !0 },
        },
        oa = function (e) {
          console.log("page size change", e);
        },
        ca = function (e, t) {
          console.log("sortchange", e, t);
        },
        ia = function (e) {
          console.log("filter change", e);
        },
        sa = function (e) {
          console.log("page change", e);
        },
        Ca = function () {
          var e = window.location;
          return e.href.includes("boats_for_sale")
            ? (console.log("sale"),
              Object(n.jsx)(ke, {
                title: "Boats for Sale",
                defaultState: ra,
                onPageSizeChange: oa,
                onSortChange: ca,
                onFilterChange: ia,
                onPageChange: sa,
                link: p,
                location: e,
              }))
            : e.href.includes("register.html")
            ? (console.log("register"),
              Object(n.jsx)(ke, {
                title: "Browse the Register",
                defaultState: na,
                onPageSizeChange: oa,
                onSortChange: ca,
                onFilterChange: ia,
                onPageChange: sa,
                link: p,
                location: e,
              }))
            : (console.log("boat"), Object(n.jsx)(aa, { location: e }));
        };
      s.a.render(
        Object(n.jsx)(c.a.StrictMode, {
          children: Object(n.jsx)(C.a, {
            children: Object(n.jsx)(g, { children: Object(n.jsx)(Ca, {}) }),
          }),
        }),
        document.getElementById("root")
      ),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready
            .then(function (e) {
              e.unregister();
            })
            .catch(function (e) {
              console.error(e.message);
            });
    },
  },
  [[596, 1, 2]],
]);
//# sourceMappingURL=main.c184d00d.chunk.js.map
